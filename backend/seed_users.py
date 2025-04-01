import sys
import os
import bcrypt
from datetime import datetime

# Add the root directory to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Import your database connection
from env.users_dbConnect import UsersSessionLocal, UsersBase
from backend.auth.models import User

def seed_users():
    # Create a session
    db = UsersSessionLocal()
    
    try:
        # Check if there are already users in the database
        existing_users = db.query(User).count()
        if existing_users > 0:
            print(f"Database already has {existing_users} users. Skipping seeding.")
            return
        
        # Create sample users
        users = [
            {
                "email": "user1@example.com",
                "password": bcrypt.hashpw("Password123!".encode('utf-8'), bcrypt.gensalt()).decode('utf-8'),
                "first_name": "John",
                "last_name": "Doe",
                "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
                "is_email_verified": True,
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "email": "user2@example.com",
                "password": bcrypt.hashpw("Password123!".encode('utf-8'), bcrypt.gensalt()).decode('utf-8'),
                "first_name": "Jane",
                "last_name": "Smith",
                "profile_picture": "https://randomuser.me/api/portraits/women/1.jpg",
                "is_email_verified": False,
                "verification_token": "sample-verification-token",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        
        # Add users to database
        for user_data in users:
            user = User(**user_data)
            db.add(user)
        
        # Commit the changes
        db.commit()
        
        print("Successfully seeded the database with 2 users:")
        print("1. John Doe (user1@example.com) - Email verified")
        print("2. Jane Smith (user2@example.com) - Email not verified")
        
    except Exception as e:
        print(f"Error seeding the database: {str(e)}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    # Create tables if they don't exist
    UsersBase.metadata.create_all(bind=UsersSessionLocal().get_bind())
    
    # Seed the database
    seed_users()