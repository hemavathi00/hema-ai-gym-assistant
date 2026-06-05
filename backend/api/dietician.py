from fastapi import APIRouter
from pydantic import BaseModel
from ai_modules.dietician import DietPlanner

router = APIRouter()
planner = DietPlanner()

class DietRequest(BaseModel):
    weight_kg: float
    height_cm: float
    goal: str

@router.post("/plan")
async def get_diet_plan(request: DietRequest):
    """
    Endpoint to receive user stats and return an NLP-based diet plan and grocery list.
    """
    result = planner.generate_plan(request.weight_kg, request.height_cm, request.goal)
    return result
