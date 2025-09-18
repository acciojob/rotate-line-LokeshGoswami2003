// global angle
let angle = 0;

// select the line element
const line = document.getElementById('line');

// update function runs every 20ms and increases angle by 2 degrees
setInterval(() => {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
