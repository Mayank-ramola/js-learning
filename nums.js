const score = 400
console.log(score); //
console.log(typeof score); 

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //if too many values in point 

const otherNumber = 123.9545
console.log(otherNumber.toPrecision(3)); //use vey carefully

const Hundreds = 1000000
console.log(Hundreds.toLocaleString('en-IN'));
