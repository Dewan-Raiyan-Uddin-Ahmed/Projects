//Truthy or falsy

// const userEmail = "raiyan@yahoo.com"
const userEmail = []
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false' (under string), " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const obj = {
//     name : "raiyan",
//     age : 27
// }
// console.log(Object.keys(obj));

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log(`object is empty`);
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeasPrice = 100
iceTeasPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

