# AI Chatbot for Electrical Equipment Monitoring and Fault Detection

This project is a **simulation-based system** that monitors electrical equipment (transformers, motors, alternators, MCC panels, PCC panels) and integrates with an **AI-powered chatbot** to provide real-time health status and fault detection.

The novelty lies in combining **real-time (simulated) IoT data**, a **backend with fault detection logic**, and a **chatbot interface** where users can ask simple questions like *"What’s the transformer status?"* and receive plain-English responses with actionable insights.

---

## 🔹 Features

* Real-time data simulation for multiple devices (transformer, motor, alternator, MCC/PCC panels).
* Backend built with **Node.js + Express + MongoDB** for data storage and fault detection.
* Chatbot built with **Node.js** that fetches live data and explains health status.
* Rule-based diagnostic system (e.g., overheating, overload, abnormal vibration).
* Extendable to **ML-based predictive maintenance**.
* Scalable architecture (can replace simulated data with real sensors/ESP32 in the future).

---

## 🔹 System Architecture

```
+-------------+        +-------------+        +-------------+        +-------------+
| Data Source | -----> |   Backend   | -----> |   Chatbot   | -----> |   End User  |
| (Simulator) |        | (Node+DB)   |        | (Node NLP)  |        | (CLI/Web)   |
+-------------+        +-------------+        +-------------+        +-------------+
```

1. **Simulator** generates realistic sensor readings for devices.
2. **Backend** stores data in MongoDB and applies health rules.
3. **Chatbot** fetches latest data via API and interprets health.
4. **User** interacts with chatbot or dashboard to monitor status.

---

## 🔹 Tech Stack

* **Backend**: Node.js, Express, MongoDB
* **Chatbot**: Node.js (readline, simple NLP logic)
* **Simulator**: Node.js (Axios for sending data)
* **Frontend (Optional)**: React + Chart.js/Recharts for dashboards

---

## 🔹 Project Structure

```
project-root/
├─ backend/        # Express server + MongoDB storage
│  └─ server.js
├─ simulator/      # Dummy data generator for equipment
│  └─ generator.js
├─ chatbot/        # Chatbot CLI interface
│  └─ bot.js
└─ docs/           # System design diagrams & documentation
```

---

## 🔹 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-chatbot-equipment-monitoring.git
cd ai-chatbot-equipment-monitoring
```

### 2. Setup Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at `http://localhost:5000`.

### 3. Setup Simulator

```bash
cd simulator
npm install
node generator.js
```

This will continuously push simulated data into the backend.

### 4. Run Chatbot

```bash
cd chatbot
npm install
node bot.js
```

Now you can type queries like:

```
> Check transformer health
> What is the motor status?
> Is the MCC panel okay?
```

---

## 🔹 API Endpoints

* `POST /api/data` → Add sensor reading
* `GET /api/latest/:device` → Fetch latest raw data for a device
* `GET /api/status/:device` → Fetch latest data with health analysis

Example Response:

```json
{
  "device": "transformer",
  "payload": {
    "temperature": 95,
    "current": 18,
    "voltage": 220
  },
  "timestamp": "2025-09-16T18:15:00Z",
  "assessment": {
    "status": "Critical",
    "reasons": ["Temp 95°C >= critical 90"]
  }
}
```

---

## 🔹 Future Scope

* Replace simulator with **real sensors + ESP32**.
* Add **predictive ML models** for early fault detection.
* Cloud deployment (AWS IoT, Azure IoT, Firebase).

  
---

## 🔹 Authors

* \Prasun Kundu
* Iman Haider
* Md A khan
* C sonker
* Final Year Project, Department of Electrical & Electronics Engineering

---

## 🔹 License

MIT License

                                                  
