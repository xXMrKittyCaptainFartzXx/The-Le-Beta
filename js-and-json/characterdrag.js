//Create the image dynamically
const draggableCharacter = document.createElement('img'); 

// figure out how many folders deep this page is, then climb back to project root
const pathParts = location.pathname.split('/').filter(Boolean); 
const depth = Math.max(0, pathParts.length - 1); // -1 because last part is the filename
const basePath = '../'.repeat(depth);

draggableCharacter.src = basePath + 'assets/characterdrag/PixelFoxDrag1.png';

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