const body = document.body;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");
const btn = document.getElementById("btn");
const cursor = document.getElementById("cursor");
ctx.fillStyle = "#FFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let colorValue = color.value;
cursor.style.borderRadius = "5px";
cursor.style.border = "2px solid green";
color.onchange = (e) => {
  colorValue = e.target.value;
};

btn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

let lastX = null;
let lastY = null;
let mouseDown = false;

canvas.onmousedown = (e) => {
  mouseDown = true;
};
body.onpointermove = (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  cursor.style.width = 8 + "px";
  cursor.style.height = 8 + "px";
  cursor.style.backgroundColor = colorValue;
};
canvas.onmousemove = (e) => {
  if (!mouseDown) return;
  let x = e.clientX - (body.offsetWidth - 800) / 2;
  let y = e.clientY - (body.offsetHeight - 600) / 2;
  if (x >= 0 && x <= 800 && y >= 0 && y <= 600 && lastX && lastY) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    canvas.style.cursor = "none";
    ctx.strokeStyle = colorValue;
    ctx.lineWidth = 8;
    ctx.stroke();
  }
  lastX = x;
  lastY = y;
};
body.onmouseup = (e) => {
  mouseDown = false;
  lastX = null;
  lastY = null;
};

// TODO add download button
const download = () => {
  let canvasUrl = canvas.toDataURL("image/jpeg", 1);
  const createEl = document.createElement("a");
  createEl.href = canvasUrl;
  console.log(canvasUrl);
  createEl.download = "canvas";
  createEl.click();
  createEl.remove();
};
