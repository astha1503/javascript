// 

const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // ["thor" , "Ironman" , "spiderman" , ["superman" , "flash" , "batman"] ] 
console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros) ; 
console.log(allHeros) ; // ["thor" , "Ironman" , "spiderman" , "superman" , "flash" , "batman" ] 


const allNewHeros = [...marvel_heros , ...dc_heros];
console.log(allNewHeros) ; // ["thor" , "Ironman" , "spiderman" , "superman" , "flash" , "batman" ]

const another_array = [ 1 , 2 , 3, [4 , 5, 6] , 7 , [6 ,7 ,[4 ,5]]]; 

const real_another_array = another_array.flat(Infinity) 

console.log(real_another_array); // [ 1 ,2 , 3 , 4 , 5 , 6 , 7 , 6 , 7 , 4 , 5 ]


console.log(Array.isArray("Hitesh")); // false

console.log(Array.from("Astha")); // [ 'A' , 's' , 't' , 'h' ,'a' ]

console.log(Array.from({name: "Astha"})) // give empty array // interesting

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;

console.log(Array.of( score1 , score2 , score3 )) ; //[100 ,200 ,300]

