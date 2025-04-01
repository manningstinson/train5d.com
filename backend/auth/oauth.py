import os
from fastapi import Request, Depends
from authlib.integrations.starlette_client import OAuth
from starlette.responses import RedirectResponse
from sqlalchemy.orm import Session
import sys

# Add the root directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from env.users_dbConnect import get_users_db
from .models import User
from .utils.security import create_access_token

# Frontend URL for redirects
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

# Configure OAuth
oauth = OAuth()
oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID", ""),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET", ""),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"}
)

async def google_login(request: Request):
    """Initiate Google OAuth login flow"""
    # Get the redirect URI based on the current request
    redirect_uri = request.url_for("google_callback")
    return await oauth.google.authorize_redirect(request, str(redirect_uri))

async def google_callback(request: Request, db: Session = Depends(get_users_db)):
    """Handle Google OAuth callback"""
    # Get token and user info from Google
    token = await oauth.google.authorize_access_token(request)
    user_info = await oauth.google.parse_id_token(request, token)
    
    # Extract user information
    google_id = user_info.get("sub")
    email = user_info.get("email")
    first_name = user_info.get("given_name")
    last_name = user_info.get("family_name")
    profile_picture = user_info.get("picture")
    
    # Check if user exists by Google ID
    user = db.query(User).filter(User.google_id == google_id).first()
    
    if not user:
        # Check if user exists by email
        user = db.query(User).filter(User.email == email).first()
        
        if user:
            # Update existing user with Google information
            user.google_id = google_id
            user.is_email_verified = True  # Google verifies emails
            if profile_picture:
                user.profile_picture = profile_picture
        else:
            # Create new user
            user = User(
                email=email,
                google_id=google_id,
                first_name=first_name,
                last_name=last_name,
                profile_picture=profile_picture,
                is_email_verified=True
            )
            db.add(user)
        
        db.commit()
        db.refresh(user)
    
    # Generate JWT token
    access_token = create_access_token({"sub": str(user.id)})
    
    # Redirect to frontend with token
    redirect_url = f"{FRONTEND_URL}/auth/callback?token={access_token}"
    return RedirectResponse(url=redirect_url)