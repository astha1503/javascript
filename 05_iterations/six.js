// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach ( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); // forEach loop can't return in tthis sutuition it's just return undefined

const myNums = [1 , 2 ,3 , 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4) 
// console.log(newNums); // It will return value in this case.

// const newNums = myNums.filter( (num) => {num > 4}) // in this case vaule will not return it make as object . we have to use return in this case.

// const newnums = [] 

// myNums.forEach( (num) => {
//     if(num > 4){
//         newnums.push(num);
//     }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks = books.filter ( (bk) => bk.genre === 'History')

 console.log(userBooks); // it will print all history section book

 userBooks = books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === "History"} ) 
    // if we print it will return all book after 2000 publish abd also history section over write privies one


