// Primitive

// it is 7 types of value : 1 . String  2. Number  3. Boolearn 4 . null 5.undefined  6.Symbol  7. BigInt

// JavaScript is dyamicay type lang hai

const score = 100 ;
const scoreValue = 100.3 ; // both are store in number form 

const isLoggedIn = false;
const outsideTemp = null 
let userEmail ; // in this value is store in undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// we use symbol to store unqeni value and also data type is also symbol value same but differnt in backend

console.log(id == anotherId); // output is false 


const bigNumber = 123333333333435567789897n



// Reference (Non primitive)

// Array , Objects , Functions

// array
const heros= ["shaktimaan" , "naagraj" , "doga"]

// objects
let myObj = {
    name : "Astha Bhardwaj",
    age : 20 ,

}

// Function
const myFunction =  function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);
// Value given by typeOf in js is :
// 1. Undefined : "undefined"
// 2.Null : "object"
// 3. Boolean : "boolean"
// 4. Number : "number"
// 5.String : "string"
// 6.Object(native and does not implement [[Call]])  : "object"
// 7. Object(native or host and does implement [[Call]])  : "function"
// 8. Object(host and does not implement [[Call]])  : Implementation-defined except may not be "undefined" , "boolean" , "number" , or "sting" .

// https://262.ecma-international.org/5.1/#sec-11.4.3


//////////////////////////////////////////////////

// stack (Primitive) # in this we get copyed value, Heap 3 but here it give value by refrance (Non-Primitive)

let myPetName = "Pyari";

let anotherPet = myPetName;
anotherPet = "gola";

console.log(myPetName);
console.log(anotherPet); // it pass copy value change in copy

let userOne = {
    email : "user@gmail.com" ,
    upi : "user2ybl"
}

let userTwo = userOne; // here value is pass by refrace if we change in userTwo it will also reflected into userOne

userTwo.email = "astha@google.com";
console.log(userOne.email);
console.log (userTwo.email); // but here value is same and also it pass by refration so if we change one value it show to other


