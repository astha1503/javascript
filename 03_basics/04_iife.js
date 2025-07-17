// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // name IIFE 
    console.log(`DB CONNECTED`);
})() ; // it will excquit it right now // in this we have to use ; to tell complier line end


// () this for function next () this for call

((name) => {
    // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Astha") 
// DB CONNECTED TWO Astha 