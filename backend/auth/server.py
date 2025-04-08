import uvicorn
from app import app  # Import your FastAPI app from app.py

if __name__ == "__main__":
    uvicorn.run(
        "app:app",  # This points to the app instance in app.py
        host="0.0.0.0",
        port=8000,
        reload=True
    )