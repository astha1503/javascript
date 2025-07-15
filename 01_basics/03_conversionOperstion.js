let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); /// some time it tell store char value also so check it properlty NaN


// "33" => 33
//  "33abs" => NaN
// true => 1 ; false => 0
// Null => 0 , undefined => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true ; 0=> false 
// "" => false ; "string" => true

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ******** Operations ************//

let value = 3
let negValue = -value
//console.log();

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Astha"
let str3 = str1 + str2 // In this concasation
console.log(str3); // output hello Astha

console.log ("1" + 2); // output 12
console.log(1+"2"); // output
console.log("1" + 2 + 2) // output : 122
console.log(1 + 2 + "2") // output : 32

console.log(+true) // output : 1
console.log(+""); // output : 0

let num1 , num2 , num3

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 
//  you can also refrace mdn