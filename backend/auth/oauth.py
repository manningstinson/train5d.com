import os
import sys

# Dynamically import the appropriate module based on environment
ENV = os.getenv("ENV", "dev")

if ENV == "dev":
    from .oauth_dev import oauth, FRONTEND_URL, CALLBACK_URL, google_login, google_callback
else:
    from .oauth_prod import oauth, FRONTEND_URL, CALLBACK_URL, google_login, google_callback

# Re-export the imported components
__all__ = ["oauth", "FRONTEND_URL", "CALLBACK_URL", "google_login", "google_callback"]