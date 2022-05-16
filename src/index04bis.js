import fs from 'fs';
// https://tutorialedge.net/nodejs/reading-writing-files-with-nodejs/

const path = './TP04/text.txt';
const data = "Chau!!!!"

fs.writeFileSync(path, data)