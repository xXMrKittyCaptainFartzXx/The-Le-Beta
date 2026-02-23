// Create the image dynamically
const draggableCharacter = document.createElement('img');

// Find the URL of THIS script (characterdrag.js)
const scriptEl =
  document.currentScript ||
  document.querySelector('script[src$="characterdrag.js"]');

const scriptUrl = new URL(scriptEl.src);

// project root is one level up from /js-and-json/
const projectRoot = new URL('../', scriptUrl);

// build the image URL from the project root
draggableCharacter.src = new URL(
  'assets/characterdrag/PixelFoxDrag1.png',
  projectRoot
).href;

draggableCharacter.classList.add('draggable-character');
document.body.appendChild(draggableCharacter);

draggableCharacter.setAttribute('draggable', 'false');

// drag logic below
let isDragging = false;
let offsetX, offsetY;

draggableCharacter.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableCharacter.offsetLeft;
  offsetY = e.clientY - draggableCharacter.offsetTop;
  draggableCharacter.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  draggableCharacter.style.left = e.clientX - offsetX + 'px';
  draggableCharacter.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableCharacter.style.cursor = 'grab';
});