//for of  

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 ,2 ,3 ,4 ,5 ]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

console.log(map) ;
// map will store a unquie value in it 

for (const key of map) {
    console.log(key); // value come in array form
}
for (const [key , value] of map) {
    console.log(key); // only key will print 
    console.log(key, ':-' , value);
}

const myObject = {
    'game1':'NFS',
    'game2': 'Spiderman'
}

for (const [key , value] of myObject) {
    console.log(key,':-', value);
}