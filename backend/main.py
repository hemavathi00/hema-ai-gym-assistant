from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import trainer, dietician, iot, tracker, buddy

app = FastAPI(
    title="AI Gym & Fitness Assistant API",
    description="Backend API for the modular AI Gym & Fitness application",
    version="1.0.0"
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers from API modules
app.include_router(trainer.router, prefix="/api/trainer", tags=["Gym Trainer"])
app.include_router(dietician.router, prefix="/api/dietician", tags=["Dietician"])
app.include_router(iot.router, prefix="/api/iot", tags=["Smart Gym IoT"])
app.include_router(tracker.router, prefix="/api/tracker", tags=["Habit Tracker"])
app.include_router(buddy.router, prefix="/api/buddy", tags=["Virtual Buddy"])

@app.get("/")
async def root():
    return {"message": "Welcome to the AI Gym & Fitness Assistant API"}
