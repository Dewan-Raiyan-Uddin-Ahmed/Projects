// alert(3+6);

//Data types

/*
Number
BigInt
String
Boolean
Null
undefined
object
*/
let name = "raiyan"
let age = 15;

console.log(typeof name);
console.log(typeof null);

let score = "33";

//string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN
// true => 1
//Null => 0

let isLoggedIn = 1
let isBoolean = Boolean(isLoggedIn);
console.log(isBoolean);

// 1 => true; 0=> false
// "" => false

let someNumber = 33;
let StringNum = String(someNumber);
console.log(typeof StringNum); // type -> string

// Operations......................

let value = 3
let negValue = -value;
console.log(negValue);

console.log(2**3);

let str1 = "hello";
let str2 = " Raiyan";
let str3 = str1 + str2;
console.log(str3)

// let x = Number(prompt("Enter a number:"));
// let y = Number(prompt("Enter a number:"));

// console.log(x+y);


//Comparision dataTypes

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 1);










