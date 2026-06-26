function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

async function runCommand(type) {
    const output = document.getElementById("output");

    const routes = {
    system: "http://127.0.0.1:5000/system",
    disk: "http://127.0.0.1:5000/disk",
    memory: "http://127.0.0.1:5000/memory",
    uptime: "http://127.0.0.1:5000/uptime",
    ip: "http://127.0.0.1:5000/ip",
    ports: "http://127.0.0.1:5000/ports",
    nmap: "http://127.0.0.1:5000/nmap"
};

    output.textContent = "micah@cyberlab:~$ running command...\n";

    const response = await fetch(routes[type]);
    const data = await response.json();

    output.textContent = data.output;
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);