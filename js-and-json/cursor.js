const cursor = document.createElement('img'); // creates new img element in memory

const scriptEl =
  document.currentScript ||
  document.querySelector('script[src$="cursor.js"]');

const scriptUrl = new URL(scriptEl.src);
const projectRoot = new URL('../', scriptUrl);

cursor.src = new URL('assets/cursors/PixelFoxCursor5.png', projectRoot).href;

cursor.src = './assets/cursors/PixelFoxCursor5.png'; // your custom cursor image
cursor.style.position = 'fixed';
cursor.style.width = '48px';
cursor.style.height = '51px';
cursor.style.pointerEvents = 'none'; // tells the browser to 'ignore this element for mouse clicks, hovers, etc.' Without this, the cursor image could block clicks on links or buttons
cursor.style.zIndex = '9999'; // Brings the image on top of everything else visually. Higher z-index means it will always appear above other content.

document.body.appendChild(cursor); // Adds the <img> element to the page body, so it actually appears on the page

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})


