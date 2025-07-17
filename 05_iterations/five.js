const coding = ["js" , "ruby" , "java " , "python" , "cpp"]

coding.forEach( function(val){
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
})

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    console.log(item, index , arr);
}) /// in this sutution we pass the index and also whole array so when ever it come whole array is pass by the function.

const myCoding = [
    {
        languageName: "javasript",
        languagefileName : "js"
    },
    {
        languageName: "java",
        languagefileName : "java"
    },
    {
        languageName: "python",
        languagefileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})

