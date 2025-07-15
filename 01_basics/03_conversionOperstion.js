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
