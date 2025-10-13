console.log("Hello, World!");

const fs = require("fs");

let a = 10;
let b = 5;

let sum = a + b;
let product = a * b;

let data = `Sum: ${sum}\nProduct: ${product}`;
console.log(data);


fs.writeFile('output.txt', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});



