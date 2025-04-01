import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Load environment variables
load_dotenv(dotenv_path="env/.env")

print("Initializing Users database connection...")

# Create engine with CA certificate
engine = create_engine(
    f"postgresql://{os.getenv('USERS_DB_USER')}:{os.getenv('USERS_DB_PASSWORD')}@{os.getenv('USERS_DB_HOST')}:{os.getenv('USERS_DB_PORT')}/{os.getenv('USERS_DB_NAME')}",
    connect_args={
        'sslmode': 'require',
        'sslrootcert': os.path.join('env', 'users-ca-certificate.crt')
    }
)

# Create session factory
UsersSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create declarative base for models
UsersBase = declarative_base()

# Database dependency
def get_users_db():
    db = UsersSessionLocal()
    try:
        yield db
    finally:
        db.close()

print("✅ Users database connection initialized successfully!")