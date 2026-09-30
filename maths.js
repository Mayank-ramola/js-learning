console.log(Math);
console.log(Math.abs(-50)); // Negative to Positive
console.log(Math.round(50.56)); // Round of the Decimal value
console.log(Math.ceil(4.3)); // choose top value 
console.log(Math.floor(4.8)); //choose lower value
console.log(Math.sqrt(2)); //give square root of the value
console.log(Math.min(4,3,5,8)); //finds minimum value in array
console.log(Math.max(4,93,11,53)); //find maximum value in the array

// ------------------------------------------------//

console.log(Math.random()); //Random provide value between 0-1
console.log((Math.random()*10) + 1); //multiplying 10 and adding 1 so we get value bigger than 1
console.log(Math.floor(Math.random()*10) +1); // using floor so get lower possible value without decimal


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // used min and max so get value between them
