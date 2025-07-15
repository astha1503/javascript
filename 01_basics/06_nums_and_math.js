const score = 400;
console.log(score); // in this complier khud se dictavate karta hai number sometime it also throw different value 

const balance = new Number (100);
console.log(balance); // Output : [Number: 100]
// in this it defined as the number type an we can performed opersation which is performed on the number type data 

console.log(balance.toString()); // it will chage it to string type and we can performed more operstion which available in string
console.log(balance.toFixed(2)); // 100.00 // it give decimal to print at a specific size.

const otherNumber = 123.84975943;
console.log(otherNumber.toPrecision(3)); //124 // it will return value of size which we pass in function around off .

const otherNo = 23.84975943;
console.log(otherNo.toPrecision(3)); //23.8

const hundreds = 10000000;
console.log(hunderds.toLocaleString()); // Output : 10,000,000 give in us number system
console.log(hunderds.toLocaleString(en-IN)); // Output :  1,00,00,000 in indian number system 

// MIN_VALUE
// MAX_SAFE_INTEGER


// ++++++++++++++ Maths++++++++++++++++//

console.log (Math); // Object [Math] {}
// Property
// abs  for abosulty value

//round ; ceil ; floor
// Math.min ; Math.max
// Math.random()  // value lie between 0 to 1

// now value will print between 1 to 10
console.log((Math.random()*10) + 1 ); // value print bet 1 to 10

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random()*(max-min+1)) + min); // Value come betwwen 10 to 20


