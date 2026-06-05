import random

class IoTManager:
    def __init__(self):
        # In a real setup, paho.mqtt.client would connect to the broker here
        self.connected = True
        
    def get_equipment_status(self):
        # Mock MQTT data retrieval
        # E.g., receiving messages from topics like gym/equipment/treadmill
        return {
            "treadmill_1": {"status": "in_use", "speed_kmh": 10.5},
            "bench_press_1": {"status": "available", "weight_kg": 0},
            "smart_dumbbell_pair": {"status": "in_use", "reps": 8}
        }
        
    def adjust_resistance(self, equipment_id: str, level: int):
        # Mock sending an MQTT message to adjust resistance
        # client.publish(f"gym/equipment/{equipment_id}/set_resistance", level)
        return {"equipment_id": equipment_id, "new_resistance": level, "status": "adjusted"}
