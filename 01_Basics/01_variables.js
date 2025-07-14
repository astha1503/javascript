const accountId = 144553 //value can't change here
let accountEmail = "astha@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; // it will show undefined

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity]);

// prefer to use let and const 
// prefeer not to use var because of issue in block scope and functional scope
accountEmail = "astha.123@gmail.com"
accountPassword = " 1232213"
accountCity = "Bihar" 

console.table([accountId , accountEmail , accountPassword , accountCity]);