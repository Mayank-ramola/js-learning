const accountId = 12345
let accountEmail = "Mayanksinghramola@gmail.com" 
var accountPassword = "223344"
accountCity = "Uttrakhand"
let accountState;


// accountId = 2344 // const can not be change
accountEmail = "ma@google.com"
accountPassword = "5456"
accountCity = "Delhi"

/*
prefer not to use var 
cuz of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])