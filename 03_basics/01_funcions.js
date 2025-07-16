function sayMyName(){
    console.log("A");
console.log("S");
console.log("T");
console.log("H");
console.log("A");
}

// sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
};

addTwoNumbers(3 ,4); //7
addTwoNumbers(3 ,a);//3a

const result = addTwoNumbers(3 ,5);
console.log("Result: ", result); // undefined

function loginUserMessage(username){
    return`${username} just logged in`
}

loginUserMessage("astha")

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(10)) // output: 10

// function calculateCartPrice(...num1){
//     return num1
// } // it will return array value

const user = {
    username: "Astha",
    password: "astha@123"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.password}`)
}

handleObject(user)
 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));