from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional
from datetime import datetime

# User registration schemas
class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8)
    first_name: Optional[str] = None
    last_name: Optional[str] = None

    @validator('password')
    def password_strength(cls, v):
        # Add password validation logic
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters')
        # You can add more validations like requiring numbers, special chars, etc.
        return v

# User login schema
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Password reset request
class PasswordResetRequest(BaseModel):
    email: EmailStr

# New password
class NewPassword(BaseModel):
    password: str = Field(..., min_length=8)
    confirm_password: str

    @validator('confirm_password')
    def passwords_match(cls, v, values):
        if 'password' in values and v != values['password']:
            raise ValueError('Passwords do not match')
        return v

# User response
class UserOut(BaseModel):
    id: int
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    profile_picture: Optional[str] = None
    is_email_verified: bool
    created_at: datetime

    class Config:
        orm_mode = True

# Token response
class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserOut