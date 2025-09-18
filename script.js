//your JS code here. If required.
// global angle
let angle = 0;

// select the line element
const line = document.getElementById('line');

// update function runs every 20ms and increases angle by 2 degrees
setInterval(() => {
  angle += 2;
  // keep the translate so the element stays centered, and apply rotation (deg)
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
