const box = document.querySelector('.box');

let x = (window.innerWidth - box.offsetWidth) / 2;
let y = (window.innerHeight - box.offsetHeight) / 2;
box.style.transform = `translate(${x}px, ${y}px)`;
box.style.width = '100px';
box.style.height = '100px';

box.addEventListener('mousedown', startDrag);
box.addEventListener('touchstart', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);
document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  x = (window.innerWidth - box.offsetWidth) / 2;
  y = (window.innerHeight - box.offsetHeight) / 2;
  box.style.transform = `translate(${x}px, ${y}px)`;
  box.style.width = '100px';
  box.style.height = '100px';
});

const gridCheckbox = document.querySelector('.grid');
gridCheckbox.addEventListener('change', () => {
  const grid = document.querySelector('.grid-overlay');
  if (gridCheckbox.checked) {
    grid.style.display = 'block';
  } else {
    grid.style.display = 'none';
  }
});

function startDrag(event) {
  event.preventDefault();
  if (event.type === 'touchstart') {
    x = event.touches[0].clientX - box.offsetLeft;
    y = event.touches[0].clientY - box.offsetTop;
  } else {
    x = event.clientX - box.offsetLeft;
    y = event.clientY - box.offsetTop;
  }
}

function drag(event) {
  event.preventDefault();
  if (event.type === 'touchmove') {
    box.style.transform = `translate(${event.touches[0].clientX - x}px, ${event.touches[0].clientY - y}px)`;
  } else {
    box.style.transform = `translate(${event.clientX - x}px, ${event.clientY - y}px)`;
  }
  
  const maxX = window.innerWidth - box.offsetWidth;
  const maxY = window.innerHeight - box.offsetHeight;
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
}

function stopDrag(event) {
  event.preventDefault();
}