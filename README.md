# Micah Cyber Lab

Micah Cyber Lab is a local cybersecurity dashboard built with HTML, CSS, JavaScript, Python, Flask, and Linux.

The dashboard runs inside an Ubuntu virtual machine and connects a web frontend to a Python backend API. Dashboard controls request real Linux system information and display the results in real time.

## Features

* Cyber terminal-style dashboard
* Matrix-style visual theme
* Flask API backend
* Real Linux system info commands
* Disk usage output
* Memory usage output
* Uptime output
* Network interface output
* Open port checks
* Localhost Nmap scan

## Tech Stack

* Python
* Flask
* HTML
* CSS
* JavaScript
* Ubuntu Linux
* Apache
* Nmap
* Git
* GitHub

## How It Works

The frontend sends requests to a Flask backend API.

The backend executes Linux commands and returns the output to the dashboard.

```text
Browser
    ↓
JavaScript Fetch API
    ↓
Flask Backend
    ↓
Linux Commands
    ↓
Output Returned to Dashboard
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/micahlorenzi/MicahCyberLab.git
cd MicahCyberLab
```

Install Flask if needed:

```bash
pip install flask
```

Start the application:

```bash
python3 app.py
```

Open your browser and navigate to:

```text
http://localhost
```

## Future Improvements

* User authentication
* Live system monitoring
* Service status dashboard
* Log viewer
* Packet capture tools
* Vulnerability scanning
* Docker deployment
* Cloud deployment

## About

I built Micah Cyber Lab to strengthen my skills in cybersecurity, Linux, Python, and web development through hands-on projects. As I continue learning, I plan to expand the dashboard with additional security tools, monitoring features, and system administration capabilities.
