import os
from authlib.integrations.starlette_client import OAuth

# Production-specific settings
FRONTEND_URL = os.getenv("PROD_FRONTEND_URL", "https://train5d.com")
CALLBACK_URL = os.getenv("GOOGLE_CALLBACK_URL", "https://train5d.com/auth/google/callback")

# Configure OAuth for production
oauth = OAuth()
oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID", ""),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET", ""),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"}
)

# Rest of your production-specific OAuth functions...