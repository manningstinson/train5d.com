import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Load environment variables
load_dotenv(dotenv_path="env/.env")

print("Initializing Nutrition database connection...")

# Create engine with CA certificate
engine = create_engine(
    f"postgresql://{os.getenv('NUTRITION_DB_USER')}:{os.getenv('NUTRITION_DB_PASSWORD')}@{os.getenv('NUTRITION_DB_HOST')}:{os.getenv('NUTRITION_DB_PORT')}/{os.getenv('NUTRITION_DB_NAME')}",
    connect_args={
        'sslmode': 'require',
        'sslrootcert': os.path.join('env', 'nutrition-ca-certificate.crt')
    }
)

# Create session factory
NutritionSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create declarative base for models
NutritionBase = declarative_base()

# Database dependency
def get_nutrition_db():
    db = NutritionSessionLocal()
    try:
        yield db
    finally:
        db.close()

print("✅ Nutrition database connection initialized successfully!")