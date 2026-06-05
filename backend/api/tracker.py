from fastapi import APIRouter
from pydantic import BaseModel
from ai_modules.habit_tracker import BehaviorTracker

router = APIRouter()
tracker = BehaviorTracker()

class WorkoutLog(BaseModel):
    user_id: str
    workout_type: str
    duration_mins: int

@router.post("/log")
async def log_workout(log: WorkoutLog):
    """
    Endpoint to log a completed workout.
    """
    return tracker.log_workout(log.user_id, log.workout_type, log.duration_mins)

@router.get("/reminders/{user_id}")
async def get_reminders(user_id: str):
    """
    Endpoint to fetch motivational reminders based on past behavior.
    """
    message = tracker.get_reminders(user_id)
    return {"user_id": user_id, "reminder": message}
