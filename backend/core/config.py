import os

class Settings:
    # MongoDB Configuration
    # Using a local MongoDB connection string by default. Replace for production.
    MONGO_URI: str = os.getenv("MONGO_URI", "mongodb://localhost:27017")
    MONGO_DB_NAME: str = os.getenv("MONGO_DB_NAME", "ai_gym_db")

settings = Settings()
