from fastapi import APIRouter
from pydantic import BaseModel
from ai_modules.virtual_buddy import ConversationalBuddy

router = APIRouter()
buddy = ConversationalBuddy()

class ChatMessage(BaseModel):
    message: str

@router.post("/chat")
async def chat_with_buddy(chat: ChatMessage):
    """
    Endpoint for conversing with the Virtual Gym Buddy.
    """
    return buddy.get_response(chat.message)
