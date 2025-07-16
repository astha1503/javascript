// singleton
// Object.create ;


// Object Literals

const JsUser = {
    name: "Astha" ,
    "full name" : "Astha Bhardwaj",
    age : 20,
    location: "Delhi",
    email: "astha.9526@gmail.com",
    isLoggedIn: false ;
    lastLoginDays:["Monday" , "Saturday"]

};

console.log(JsUser.email) // astha.9526@gmail.com"
console.log(JsUser["email"]); // astha.9526@gmail.com"
console.log(JsUser["full name"]); // Astha Bhardwaj // it is only accesed by the "" operater because . opereter not work.

const mySym = Symbol("key1") // it symbol we can not direclty add in object 
// If we want to add the symbol in object then we have to add it like [mySym]
// when we have to acces the symbol the we have to pass  it without the ""

JsUser.email = "astha@123.com" // it will change the email
// Object.freeze(JsUser); // it will freeze the data no change is reflect to the data.

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting) ; // it will only return th function (anonymous)
console.log(JsUser.greeting()); // Hello JS user.

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
} 

console.log(JsUser.greetingTwo()); // Hello JS user , Astha.