from sqlalchemy.orm import Session
from auth.models import User
import bcrypt

def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt)
    return hashed_password.decode("utf-8")

def create_user(db: Session, first_name: str, last_name: str, email: str, password: str):
    """Insert a new user into the database."""
    hashed_password = hash_password(password)
    new_user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user