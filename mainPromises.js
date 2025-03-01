import fs from 'fs/promises';

let str = await fs.readFile("Urza2.txt");
let txt = await fs.writeFile("Urza2.txt", str.toString() + "\nThis is a promise");
console.log(str.toString());