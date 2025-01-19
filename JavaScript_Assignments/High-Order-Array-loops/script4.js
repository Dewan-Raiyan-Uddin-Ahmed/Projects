const coding = ["js", "ruby", "java", "python", "cpp"];

// For each doesn't return any value
const values = coding.forEach((item)=>{
    console.log(item);
});
console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// Filter method can return value

const newNums = myNums.filter((num)=>{
    return num > 4;
});
console.log(newNums);

// const obj = {
//     name : "raiyan",
//     age : "27",
//     location : "NJ"
// }

// for(let keys in obj){
//     console.log(`${keys} : ${obj[keys]}`)
// }

//........................

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = myNumbers.map((num)=>{
//     return num + 10;
// });
// console.log(newNumbers);

// Chaining

const newNumbers = myNumbers
.map((num)=>num * 10)
.map((num)=>num + 1)
.filter((num)=>num>=40)
console.log(newNumbers);


// Reduce Method

const myNumsR = [1,2,3]

// const myTotal = myNumsR.reduce(function(acc,curr){
//     return acc + curr
// },0);

const myTotal = myNumsR.reduce((acc,curr)=>{
    return acc+curr
},0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 999
    },
    {
        itemName : "Mobile Dev course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
},0)
console.log(totalPrice);
