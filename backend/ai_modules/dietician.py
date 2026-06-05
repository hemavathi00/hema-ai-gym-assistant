class DietPlanner:
    def __init__(self):
        # Mock NLP model or scikit-learn logic could be loaded here
        pass
        
    def generate_plan(self, weight: float, height: float, goal: str):
        # Calculate BMI
        bmi = weight / ((height/100) ** 2)
        
        # Generate basic diet suggestions and grocery list based on BMI and goal
        suggestions = []
        groceries = []
        
        if goal.lower() == "weight loss":
            suggestions.append("Focus on high protein and caloric deficit.")
            groceries = ["Chicken Breast", "Broccoli", "Oats", "Greek Yogurt"]
        elif goal.lower() == "muscle gain":
            suggestions.append("Ensure caloric surplus with complex carbs.")
            groceries = ["Rice", "Beef", "Eggs", "Sweet Potatoes"]
        else:
            suggestions.append("Maintain a balanced diet.")
            groceries = ["Mixed Vegetables", "Lean Meats", "Fruits"]
            
        return {
            "bmi": round(bmi, 2),
            "suggestions": suggestions,
            "grocery_list": groceries
        }
