import fs from 'fs';
//NO ANDA!

let pathito = './TP04/text.txt';

console.log("antes");
fs.readFile(path, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
    // si usamos readFile, por default es async.
    // pero es un async raro. Pensar esto como un then..
});
console.log('durante');
// .then(() => console.log("despues"));


// No termino de entender como funciona el readFileSync:

// function ReadEsta(path){
//     fs.readFileSync(path, (err, data)=>{
//         if (err) {
//             throw err;
//         }
//         else{
//             return data.toString();
//         }
//     });    
// }

// console.log(ReadEsta(pathito));

