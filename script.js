const body = document.body;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let lastX = null;
let lastY = null;
let mouseDown = false;
// console.log(
//   e.clientX - (body.offsetWidth - 800) / 2 >= 0 &&
//     e.clientX - (body.offsetWidth - 800) / 2 <= 800 &&
//     e.clientY - (body.offsetHeight - 600) / 2 >= 0 &&
//     e.clientY - (body.offsetHeight - 600) / 2 <= 600
// );
canvas.onmousedown = (e) => {
  mouseDown = true;
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
