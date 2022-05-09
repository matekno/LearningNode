import fs from 'fs';
//NO ANDA!

let file = '../text.txt';
fs.readFileSync('text.txt', (err, data) =>{
    if (err) {
        throw err;
    }
    console.log(data);
});
