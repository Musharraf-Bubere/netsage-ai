<h1 align="center"> 🛡️ NetSage AI </h1>

<p align="center">
  <strong>AI-Powered Network Forensics & Cybersecurity Intelligence Platform</strong>
</p>

<p align="center">
  Transform raw PCAP network traffic into interactive visual intelligence. 
  NetSage AI helps students, researchers, and cybersecurity learners understand 
  network behavior, detect suspicious activity, and investigate threats through 
  intuitive dashboards and forensic storytelling.
</p>

---

## 🌟 Why NetSage AI? (The Problem)

Traditional packet analysis tools like Wireshark are powerful but often overwhelming for beginners.

- **The Problem**: Thousands of packets look like unreadable technical noise.
- **The Solution**: NetSage AI converts raw traffic into structured forensic intelligence with:
  - Interactive dashboards
  - Event relationships
  - Threat scoring
  - Geolocation tracking
  - Behavioral analysis

Instead of manually inspecting packets, users can focus on understanding the bigger security picture.

---

## 🚀 Key Features

### 🕵️ Intelligent Packet Investigation
- **2-Pass Parsing Engine**
  - Detects TCP conversations first
  - Performs deep protocol analysis second

- **Protocol Intelligence**
  - DNS Analysis
  - HTTP Request Detection
  - TLS/SNI Extraction
  - ICMP Monitoring
  - TCP Flow Tracking

- **Event Relationship Mapping**
  - Links DNS ➜ TCP ➜ HTTP/TLS activities
  - Creates a connected forensic timeline

---

### 🧠 AI-Inspired Threat Intelligence
- Behavioral threat detection
- Port scanning detection
- DNS tunnel detection
- Risk scoring engine
- Suspicious activity identification
- Network anomaly insights

---

### 🌍 Global Traffic Visualization
- IP Geolocation analysis
- Interactive attack maps
- Worldwide traffic visualization
- Threat source identification

---

### 📊 Interactive Analytics Dashboard
- Top Source IPs
- Top Destination IPs
- Protocol Distribution
- Port Distribution
- Timeline-based event tracking
- Real-time forensic summaries

---

### 📄 Professional Report Generation
- PDF forensic reports
- DOCX investigation reports
- Structured investigation summaries
- Exportable analysis results

---

## ⚡ Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Musharraf-Bubere/netsage-ai.git
cd netsage-ai
```

---

### 2️⃣ Create Virtual Environment

```bash
uv venv
```

Activate environment:

#### Windows
```bash
.venv\Scripts\activate
```

#### Linux / macOS
```bash
source .venv/bin/activate
```

---

### 3️⃣ Install Dependencies

```bash
uv pip install -e .
```

---

### 4️⃣ Run the Application

```bash
python run.py
```

Application starts at:

```text
http://localhost:5000
```

---

## 📁 Project Architecture

```text
netsage-ai/
│
├── run.py                      # Application Entry Point
├── setup.py                    # Package Configuration
├── requirements.txt
│
├── frontend/                   # User Interface Layer
│   ├── templates/
│   └── static/
│
├── backend/                    # Backend Engine
│   ├── app.py
│   │
│   ├── api/                    # API Routes
│   ├── core/                   # Config & Logger
│   ├── data/                   # Data Persistence
│   ├── parsers/                # PCAP Analysis Engine
│   ├── services/               # Business Logic Layer
│   ├── utils/                  # Helper Utilities
│   └── uploads/
│
└── logs/                       # Application Logs
```

---

## 🔍 Supported Protocols

| Protocol | Status | Description |
|----------|--------|-------------|
| DNS | ✅ Supported | Domain Resolution Analysis |
| HTTP | ✅ Supported | Web Request Inspection |
| HTTPS/TLS | ✅ Supported | SNI Extraction |
| TCP | ✅ Supported | Connection Tracking |
| ICMP | ✅ Supported | Ping Monitoring |

---

## 🧠 Core Technologies

### Backend
- Python
- Flask
- Scapy

### Frontend
- HTML
- CSS
- JavaScript
- Chart.js
- vis.js

### Security & Analytics
- Threat Heuristics
- Geolocation APIs
- Behavioral Analysis
- Flow Correlation

### Visualization
- Folium
- Leaflet Maps
- Interactive Graphs

---

## 🎯 Learning Objectives

NetSage AI was built as a practical learning project for:
- Cybersecurity students
- Network forensics beginners
- Backend engineering learners
- AI/security enthusiasts

The project demonstrates:
- Flask backend architecture
- API design
- PCAP parsing
- Threat intelligence concepts
- Service-layer architecture
- Data processing pipelines

---

## 🔮 Future AI Roadmap

Planned AI integrations:

- AI-generated forensic summaries
- LLM-powered investigation assistant
- Anomaly detection models
- Intelligent threat classification
- Natural language querying
- AI-powered attack explanations

---

## 🙏 Acknowledgments

Built using amazing open-source technologies:

- Scapy
- Flask
- Folium
- Chart.js
- vis.js

---

<p align="center">
  Built with ❤️ for Cybersecurity & AI Learning
</p>