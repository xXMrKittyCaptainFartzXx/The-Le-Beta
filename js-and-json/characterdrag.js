//Create the image dynamically
const draggableCharacter = document.createElement('img'); // creating brand-new HTML <img> element dynamically in Javascript
draggableCharacter.src = './assets/characterdrag/PixelFoxDrag1.png'
draggableCharacter.classList.add('draggable-character'); // creating an identifier for JS and CSS to both utilize "add a class to this element so I can style it or select it later"
document.body.appendChild(draggableCharacter);

draggableCharacter.setAttribute('draggable', 'false'); // kill the browser's built-in drag

// drag logic below
let isDragging = false; // creating variable "isDragging" initially be defined as false in default; it'll be changed later though
let offsetX, offsetY; // declaring two more variables

draggableCharacter.addEventListener('mousedown', (e) => { // "Hey, draggableCharacter, when someone presses the mouse on you, run this function, and here’s some info about that mouse event called e." code here runs when you press the mouse down on draggableCharacter
    isDragging = true;
    offsetX = e.clientX - draggableCharacter.offsetLeft;
    offsetY = e.clientY - draggableCharacter.offsetTop; // You click someowhere on the character, and offsetX/offsetY remember "how far from the top-left corner of the character did I click?" That way, when you move the mouse, the character moves smoothly without snapping. 
    draggableCharacter.style.cursor = 'grabbing'; //feedback
}); 

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    draggableCharacter.style.left = e.clientX - offsetX + 'px';
    draggableCharacter.style.top = e.clientY - offsetY + 'px';
}); // this whole snippet is what actually moves the character smoothly around the screen while dragging

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableCharacter.style.cursor = 'grab'; // reset look
}) // This is the "release the grab" part of the drag-and-drop logic. 