// Singleton Object
// const tinderUser = new Object()

// Object Literals
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

console.log(tinderUser); // { id: '123abc , name: 'Sammy' , isLoggedIn: false}

const regularUser = {
    email: "asthagmail.com" ,
    fullnamr: {
        userfullname:{
            firstname: "Astha",
            lastname: "Bhardwaj"
        }
    }
}

console.log(regularUser.fullname); // {userfullname:{firstname: "Astha" , lastname: "Bhardwaj"}}

console.log(regularUser.fullname.userfullname); // {firstname: "Astha" , lastname: "Bhardwaj"}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = { obj1 , obj2 }
console.log(obj3); // { obj1 = {1: "a", 2: "b"} , obj2 = {3: "a" , 4: "b"} } 

const obj_3 = Object.assign({} , obj1 , obj2)  // You can only pass obj 1 and obj2 in which value goes into obj 1 but in {} condition  
console.log(obj_3); //{1: "a", 2: "b", 3: "a" , 4: "b"}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


const obj4 = {...obj1 , ...obj2} // same upper and  also used most

const users = [
    {
        id: 1 ,
        email: "a@gmail.com"

    },
    {
        id: 1 ,
        email: "a@gmail.com"
    },
    {
        id: 1 ,
        email: "a@gmail.com"
    }
]

users[1].email // it access at 1st index email
console.log(tinderUser); // { id: '123abc , name: 'Sammy' , isLoggedIn: false}
console.log(Object.keys(tinderUser)); //output: ['id' , 'name' , 'isLoggedIn' ] // it will retune value in array 
console.log(Object.values(tinderUser)); // same as key 


console.log(Object.entries(tinderUser)); // it will make keys and value into a array than convert whole keys and value after that it will return whole array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // check if this properlty exits or not // output: true

