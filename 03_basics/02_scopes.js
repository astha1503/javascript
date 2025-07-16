// var is declare as golab variable 
// let and const maintain the scopes

console.log(addone(5)) // 6 // it will return value before function declarsation
function addone(num){
    return num + 1
}

addTwo(5) // it will give error because function declare after this 
const addTwo = function(num){
    return num + 2
} // both ways function can declare in the JS 