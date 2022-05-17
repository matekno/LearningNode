import fs from 'fs';
// https://www.geeksforgeeks.org/node-js-fs-opensync-method/

function CopyFile(input, out) {
    let data;
    try {
        data = fs.readFileSync(input);
    } 
    catch(error) {
        return error;
    }
    
    try {
        const fd = fs.openSync(out, "w", 0o666);
        fs.writeFileSync(fd, data);
        return "SUCCESS"
    } 
    catch (error) {
        return error;
    }
}

console.log(CopyFile("./hola.txt", "./out.txt"));
