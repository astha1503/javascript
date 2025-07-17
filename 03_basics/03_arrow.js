const user = {
    username: "Astha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.usernam} , welcome to website`) ;
        console.log(this); // in this it print current value or scope
    }
}

user.welcomeMessage() // Output: Astha ,Welcome to website

user.username = "aman"
user.welcomeMessage() // Output: aman ,Welcome to website

console.log(this); // it will return {} empty object bc it this they is an empty object but in browers it will return window bc js store in window.

function chai(){
    let username = "Astha"
    console.log(this) // print alot of value
    console.log(this.username); // Output : Undefined // but in objectt we can acessc  
}

// const chai = function (){
//     let username = "Astha"
//     console.log(this) // print alot of value
//     console.log(this.username); // Output : Undefined // but in objectt we can acessc  
// }

const chai = () => {
    let username = "Astha"
    console.log(this) // give {}
    console.log(this.username); // give undefined
}


//this is an arrow function
// const variable = () => {}
const addTwo = (num1 , num2) => {
    return num1 + num2 ;
}
const addTwo1 = (num1 , num2) => (num1 + num2) ;


