from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route("/system")
def system_info():
    return run_cmd(["uname", "-a"])

@app.route("/disk")
def disk_usage():
    return run_cmd(["df", "-h"])

@app.route("/memory")
def memory_usage():
    return run_cmd(["free", "-h"])

@app.route("/uptime")
def uptime():
    return run_cmd(["uptime"])

@app.route("/ip")
def ip_info():
    return run_cmd(["ip", "addr"])

@app.route("/ports")
def ports():
    return run_cmd(["ss", "-tuln"])

@app.route("/nmap")
def nmap_scan():
    return run_cmd(["nmap", "localhost"])

def run_cmd(command):
    result = subprocess.run(command, capture_output=True, text=True)
    return jsonify({"output": result.stdout})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)