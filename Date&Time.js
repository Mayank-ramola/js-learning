let myDate = new Date()
//console.log(myDate);
console.log(myDate.toString()); //   Wed Sep 30 2026 15:26:32 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //   Wed Sep 30 2026
console.log(myDate.toLocaleString()); //  30/9/2026, 3:26:32 pm
console.log(typeof myDate);

//---------------------------------------------------------------------------------------------------
//let myCreatedDate = new Date(2023, 0, 23) //in js month start from zero (0).
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //time in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());