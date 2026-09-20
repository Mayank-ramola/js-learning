const name = "Mayank"
const repoCount = 50

//console.log(name + repoCount = "Value") // outdated and not the good syntax

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


// another way to declare string

const gameName = new String('Call of Duty')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));




//slicing 
const newString = gameName.substring(0,3)
console.log(newString);
// dont obey negative values
console.log(gameName.slice(0,4));
console.log(gameName.slice(0,3).toUpperCase());
console.log(gameName.slice(0,4).toLowerCase());


//trim
const newStringOne = "      Mayank       "
console.log(newStringOne);
console.log(newStringOne.trim()); //trimmed the extra spaces from both sides 

//Replace
const url = "https://mayank.com"
console.log(url.replace('mayank','Prateek'));

console.log(url.includes('mayank'));