import os
from fastapi import Request, Depends
from authlib.integrations.starlette_client import OAuth
from starlette.responses import RedirectResponse
from sqlalchemy.orm import Session

# Import database connection and security functions
from env.users_dbConnect import get_users_db
from backend.auth.models import User
from backend.auth.utils.security import create_access_token

# Development environment settings
FRONTEND_URL = os.getenv("DEV_FRONTEND_URL", "http://localhost:3000")
CALLBACK_URL = os.getenv("GOOGLE_CALLBACK_URL_DEV", "http://127.0.0.1:8000/auth/google/callback")
AUTH_SESSION_SECRET = os.getenv("AUTH_SESSION_SECRET_DEV", "")

# Configure OAuth for development
oauth = OAuth()
oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    authorize_params={"scope": "openid email profile"},
    access_token_url="https://oauth2.googleapis.com/token",
    access_token_params=None,
    client_kwargs={"scope": "openid email profile"},
)

# Login route
async def google_login():
    redirect_uri = CALLBACK_URL
    return await oauth.google.authorize_redirect(redirect_uri)

# Callback route
async def google_callback(request: Request, db: Session = Depends(get_users_db)):
    token = await oauth.google.authorize_access_token(request)
    user_info = await oauth.google.parse_id_token(request, token)
    
    if not user_info:
        return {"error": "Failed to retrieve user info"}
    
    email = user_info.get("email")
    name = user_info.get("name")
    
    # Check if user exists in DB, if not, create them
    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(email=email, full_name=name)
        db.add(user)
        db.commit()
        db.refresh(user)

    # Create and return JWT token
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
