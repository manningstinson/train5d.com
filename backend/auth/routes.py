from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import sys
import os

# Add the root directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from env.users_dbConnect import get_users_db
from .models import User
from .schemas import UserCreate, UserOut, Token, PasswordResetRequest, NewPassword
from .utils.security import create_access_token, generate_random_token
from .utils.email import send_verification_email, send_password_reset_email
from .dependencies import get_current_user, get_verified_user
from .oauth import google_login, google_callback
from . import auth_router

# Register a new user
@auth_router.post("/register", response_model=Token)
async def register(user_data: UserCreate, db: Session = Depends(get_users_db)):
    # Check if user already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create verification token
    verification_token = generate_random_token()
    
    # Create new user
    hashed_password = User.hash_password(user_data.password)
    new_user = User(
        email=user_data.email,
        password=hashed_password,
        first_name=user_data.first_name,
        last_name=user_data.last_name,
        verification_token=verification_token,
        is_email_verified=False
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Send verification email
    await send_verification_email(new_user.email, verification_token)
    
    # Generate JWT
    access_token = create_access_token({"sub": str(new_user.id)})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": new_user
    }

# Login
@auth_router.post("/login", response_model=Token)
async def login(
    response: Response,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_users_db)
):
    # Find user by email
    user = db.query(User).filter(User.email == form_data.username).first()
    
    # Check if user exists and password is correct
    if not user or not user.verify_password(form_data.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    # Generate JWT
    access_token = create_access_token({"sub": str(user.id)})
    
    # Set cookie with token (for cross-domain use)
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=True,  # Set to True in production (HTTPS only)
        samesite="lax",  # lax or none for cross-domain
        max_age=60 * 60 * 24 * 7,  # 7 days
        # domain=".yourdomain.com"  # Uncomment and set for cross-subdomain use
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }

# Verify email
@auth_router.get("/verify-email/{token}")
async def verify_email(token: str, db: Session = Depends(get_users_db)):
    # Find user by verification token
    user = db.query(User).filter(User.verification_token == token).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid verification token"
        )
    
    # Update user
    user.is_email_verified = True
    user.verification_token = None
    db.commit()
    
    return {"message": "Email verified successfully"}

# Forgot password
@auth_router.post("/forgot-password")
async def forgot_password(request: PasswordResetRequest, db: Session = Depends(get_users_db)):
    # Find user by email
    user = db.query(User).filter(User.email == request.email).first()
    
    # If user exists, send reset email
    if user:
        reset_token = generate_random_token()
        user.reset_password_token = reset_token
        user.reset_password_expires = datetime.utcnow() + timedelta(hours=1)
        db.commit()
        
        await send_password_reset_email(user.email, reset_token)
    
    # Always return success to prevent email enumeration
    return {"message": "If a user with that email exists, a password reset link has been sent"}

# Reset password
@auth_router.post("/reset-password/{token}")
async def reset_password(token: str, password_data: NewPassword, db: Session = Depends(get_users_db)):
    # Find user by reset token and check expiry
    user = db.query(User).filter(
        User.reset_password_token == token,
        User.reset_password_expires > datetime.utcnow()
    ).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired reset token"
        )
    
    # Update password
    user.password = User.hash_password(password_data.password)
    user.reset_password_token = None
    user.reset_password_expires = None
    db.commit()
    
    return {"message": "Password reset successfully"}

# Get current user
@auth_router.get("/me", response_model=UserOut)
async def get_current_user_info(user: User = Depends(get_current_user)):
    return user

# Protected route example
@auth_router.get("/protected")
async def protected_route(user: User = Depends(get_verified_user)):
    return {"message": "You have access to this protected route", "user_id": user.id}

# Google OAuth routes
@auth_router.get("/google")
async def route_google_login(request: Request):
    return await google_login(request)

@auth_router.get("/google/callback")
async def route_google_callback(request: Request, db: Session = Depends(get_users_db)):
    return await google_callback(request, db)

# Logout
@auth_router.post("/logout")
async def logout(response: Response):
    # Clear cookie
    response.delete_cookie(
        key="access_token",
        # domain=".yourdomain.com"  # Uncomment and set for cross-subdomain use
    )
    
    return {"message": "Logged out successfully"}