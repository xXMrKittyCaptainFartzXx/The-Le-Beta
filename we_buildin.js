import thisherebud from 'fs';

const htmlText = thisherebud.readFileSync('index.html', 'utf8');

const totalCharacters = htmlText.length;

console.log("--- brrrrr here we go ---")
console.log("Index.html is currently " + totalCharacters + " characters long! guh")