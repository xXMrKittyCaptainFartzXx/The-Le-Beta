//fs means "file system"
import fs from 'fs';

// Read your package.json file as raw text
const fileContents = fs.readFileSync('package.json', 'utf8');

console.log("--- Hey bud it read the file! Take a gander: ---");
console.log(fileContents)