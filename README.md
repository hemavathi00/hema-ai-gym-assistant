<div align="center">
  <h1>🏋️‍♂️ AI Gym & Fitness Assistant</h1>
  <p>
    <strong>Your all-in-one, AI-powered personal trainer, dietician, and gym buddy.</strong>
  </p>
  
  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![MediaPipe](https://img.shields.io/badge/MediaPipe-00B2A9?style=for-the-badge&logo=google&logoColor=white)](https://google.github.io/mediapipe/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
</div>

<br/>

## 📖 Overview

The **AI Gym & Fitness Assistant** is a modern, modular web application designed to revolutionize personal fitness. By combining cutting-edge Computer Vision, Natural Language Processing, and Internet of Things (IoT) integrations, this platform provides real-time workout feedback, tailored diet plans, and intelligent equipment tracking—all wrapped in a stunning, highly-aesthetic glassmorphism React dashboard.

---

## ✨ Key Features

- **📷 AI Gym Trainer**: Uses OpenCV and Google's MediaPipe for real-time posture detection and automatic repetition counting. Never do a bicep curl with bad form again!
- **🥗 AI Dietician**: Input your physical metrics and goals to receive an NLP-generated, customized diet plan along with an actionable grocery list.
- **⚙️ Smart Gym (IoT)**: A mocked MQTT integration module capable of reading live equipment statuses (like treadmill speeds) and dynamically adjusting resistance on smart machines.
- **📈 Fitness Habit Tracker**: Log your daily workouts and receive intelligent, behavior-based motivational reminders to stay consistent.
- **🤖 Virtual Gym Buddy**: An interactive conversational AI that uses sentiment analysis to provide motivation when you're tired and praise when you crush your goals.

---

## 🏗️ Architecture

The project is strictly separated into a high-performance asynchronous backend and a dynamic frontend.

### Backend (`/backend`)
Built with **FastAPI** for blazing-fast API routes. The AI logic is highly modularized under the `ai_modules` directory, keeping the routing layer (`api/`) clean.
- **Dependencies**: PyTorch, OpenCV, MediaPipe, scikit-learn, Motor (MongoDB Async), Paho-MQTT.

### Frontend (`/frontend`)
Built with **React.js** (via Vite). It features a single-page, smooth-scrolling portfolio layout with a sticky glass-morphism navigation bar, dynamic mesh gradients, and rich micro-animations.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 18+
- MongoDB (Local or Atlas)

### 1. Start the Backend
```bash
cd backend
python -m venv venv
# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```
*The API will be running at `http://localhost:8000`. View the interactive Swagger documentation at `http://localhost:8000/docs`.*

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
*The React application will be available at `http://localhost:5173`.*

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) if you want to contribute.

## 📝 License
This project is licensed under the MIT License.
