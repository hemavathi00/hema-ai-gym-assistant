from datetime import datetime

class BehaviorTracker:
    def __init__(self):
        # In a real setup, interact with MongoDB here
        self.logs = []
        
    def log_workout(self, user_id: str, workout_type: str, duration_mins: int):
        log_entry = {
            "user_id": user_id,
            "date": datetime.now().isoformat(),
            "type": workout_type,
            "duration": duration_mins,
            "status": "completed"
        }
        self.logs.append(log_entry)
        return log_entry
        
    def get_reminders(self, user_id: str):
        # Simple rule-based behavior tracking
        user_logs = [log for log in self.logs if log["user_id"] == user_id]
        if not user_logs:
            return "You haven't logged any workouts recently. Let's get started!"
        return "Great job staying consistent! Keep it up."
