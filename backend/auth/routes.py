from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from env.users_dbConnect import get_users_db
from .crud import create_user

router = APIRouter()

@router.post("/api/register")
def register_user(
    first_name: str,
    last_name: str,
    email: str,
    password: str,
    db: Session = Depends(get_users_db)
):
    try:
        user = create_user(db, first_name, last_name, email, password)
        return {"message": "User registered successfully!", "user_id": user.id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/api/login")
def login():
    response = JSONResponse(content={"message": "Login successful"})
    response.set_cookie(
        key="access_token",
        value="your_jwt_token",  # Replace with the actual JWT token
        httponly=True,
        secure=True,  # Use secure cookies in production
        samesite="None",  # Allow cross-site cookies
        domain=".train5d.com"  # Make the cookie accessible to all subdomains
    )
    return response

@router.post("/api/logout")
def logout():
    response = JSONResponse(content={"message": "Logout successful"})
    response.delete_cookie(
        key="access_token",
        domain=".train5d.com"  # Ensure the cookie is cleared across all subdomains
    )
    return response