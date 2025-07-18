const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // in this coma value is insial value of acc . 

const myTotal = myNums.reduce( (acc , curr) => acc+curr, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "py course" ,
        price: 999
    } ,
    {
        itemName: "mobiledev course" ,
        price: 5999
    } ,
    {
        itemName: "data scientist course" ,
        price: 12999
    } ,
] 

const priceToPay = shoppingCart.reduce( (acc , item) => (acc + item.price) , 0 )

console.log(priceToPay);