// array is an object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// JavaScript arrays are resizable and can contain a mix of different data types. 
// Accessed by index.
// it cerate  shallow copies or pass by refersation 

const myArr = [1 , 2, 3 , 4, 'astha']
console.log(myArr[0]); //1

const myHeors = ["shaktiman " , "naagraj"]

const myArr2
 = new Array(1 ,2 , 3 ,4);

 // Array methods

myArr.push(5) // 1 2 3 4 5 
myArr.push(6) // 1 2 3 4 5 6 
myArr.pop() // 1 2 3 4 5

myArr.unshift(9) // It Basic add value at starting  // OUTPUT: 9 1 2 3 4 5

myArr.shift() // it will remove frist element from the vector  // OUTPUT: 1 2 3 4 5
console.log(myArr) ; // It will print the whole array here 

console.log(myArr.includes(9)); // OUTPUT : false
console.log(myArr.indexOf(3)); // it will reture postion of 3 // output : 2
console.log(myArr.indexOf(90)); // OUTPUT: -1


const newArr = myArr.join() ; 

console.log(myArr); //Output : [1 ,2 3, 4, 5]
console.log(newArr); // output : 1, 2, 3, 4, 5
console.log(typeof newArr); // String

// slice , splice 
// myArr = [0 , 1 , 2 , 3 , 4 , 5 ]
console.log ("A" , myArr); //A [0 , 1 , 2 , 3 , 4 , 5 ]

const myn1 = myArr.slice(1 , 3);

console.log(myn1); //[ 1 ,2 ]
console.log("B" , myArr); // [0 , 1 , 2 , 3 , 4 , 5 ]

const myn2 = myArr.splice(1 , 3);
console.log(myn2); // [ 1 , 2 , 3 ]
console.log("C" , myArr); // [ 0 , 4 , 5 ]

