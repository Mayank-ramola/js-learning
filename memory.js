// #Stack memory: used in Primitive types
// stack always provide copy of the value

let myname ="Mayank"

let anotherName = myname
myname = "Prateek"


console.log(myname); //Prateek
console.log(anotherName); //Mayank

// #Heap memory: used in Refrence types
// heap always provide refrence of the value

let userOne ={
    email: "Mayank@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "prateek@gmail.com"

console.log(userOne.email); //prateek@gmail.com