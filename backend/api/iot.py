from fastapi import APIRouter
from pydantic import BaseModel
from ai_modules.smart_gym import IoTManager

router = APIRouter()
iot_manager = IoTManager()

class ResistanceRequest(BaseModel):
    equipment_id: str
    level: int

@router.get("/status")
async def get_status():
    """
    Endpoint to retrieve current equipment status via MQTT mock.
    """
    return iot_manager.get_equipment_status()

@router.post("/adjust")
async def adjust_equipment(request: ResistanceRequest):
    """
    Endpoint to send an MQTT message to adjust equipment resistance.
    """
    return iot_manager.adjust_resistance(request.equipment_id, request.level)
