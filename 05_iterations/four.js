const myObject =  {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
} // for in loop is used in the object not only but object we use the for in loop

const programming = ["js" ,"rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(key); // but il will return the keyits means it's just return index
}

// for this map we can't use the for in loop bc it's not iterated

