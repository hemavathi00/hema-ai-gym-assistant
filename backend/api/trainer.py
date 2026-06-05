from fastapi import APIRouter, UploadFile, File
from ai_modules.gym_trainer import PoseDetector

router = APIRouter()
detector = PoseDetector()

@router.post("/analyze_posture")
async def analyze_posture(file: UploadFile = File(...)):
    """
    Endpoint to receive video frames and return posture feedback and rep counts.
    """
    contents = await file.read()
    # Process the frame using the AI module
    result = detector.analyze_frame(contents)
    
    return result
