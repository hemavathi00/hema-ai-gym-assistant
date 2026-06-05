# A simple mock for sentiment analysis and conversational response
class ConversationalBuddy:
    def __init__(self):
        # Could initialize HuggingFace transformers pipeline here
        # self.sentiment_analyzer = pipeline("sentiment-analysis")
        pass
        
    def get_response(self, user_message: str):
        # Basic keyword-based mock sentiment analysis
        lower_msg = user_message.lower()
        if any(word in lower_msg for word in ["tired", "give up", "hard", "pain"]):
            sentiment = "negative"
            response = "I know it's tough, but diamonds are made under pressure! You got this! Take a small rest if needed, then finish strong."
        elif any(word in lower_msg for word in ["easy", "good", "great", "done"]):
            sentiment = "positive"
            response = "Awesome work! That's the spirit. Keep pushing those limits!"
        else:
            sentiment = "neutral"
            response = "Consistency is key. What's the next exercise on our list?"
            
        return {
            "sentiment": sentiment,
            "response": response
        }
