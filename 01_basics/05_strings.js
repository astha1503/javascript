const name = "Astha"
const repoCount = 9

// console.log(name + "repocount" + repoCount); // Don't use this it's outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // it also print whole line where we are use $sign where we can we use the variable name 

const gameName = new String('asthayoyo')

console.log(gameName[0]); // a
console.log(gameName.__proto__); //{}

console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); //ASTHAYOYO
console.log(gameName.charAt(2)); //t  it's tell at 2 poition which char is located
console.log(gameName.indexOf('t')); //2  tell the position 


const newString = gameName.substring(0 , 4); // include onl;y upto 0to 3 index output is asth
console.log(newString); //asth

const anotherString = gameName.slice(-8 , 4) //sth
console.log(anotherString); // output : sth

const newStringOne = "    astha    "
console.log(newStringOne); // it will print as input include the space 
console.log(newStringOne.trim()); // It will remove the extra space which is present in string only print the string not the first and last space .
// trim is only work on white space 

const url = "https://astha.com/astha%15bhardwaj@20" ;

console.log (url.replace('%15' , '-')); // Output : https://astha.com/astha-bhardwaj@20

console.log(url.includes('astha')) ; // true
console.log(url.includes('vaibhavi')) // false

// for more detail
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
