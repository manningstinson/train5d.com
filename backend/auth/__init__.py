# This file makes the auth directory a Python package
from fastapi import APIRouter

auth_router = APIRouter(prefix="/api/auth", tags=["auth"])

# Import and register routes
from .routes import *