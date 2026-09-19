// "use strict";

let score = "55"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"55" => 55
// "55abc" => NaN
// true => 1; false => 0

let isloggedIn = " "
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; "mayank" => true
// "Mayank" => true; " " => true


let SomeNumber = 123
let StringNumber = String(SomeNumber)
console.log(typeof StringNumber)
console.log(StringNumber)
