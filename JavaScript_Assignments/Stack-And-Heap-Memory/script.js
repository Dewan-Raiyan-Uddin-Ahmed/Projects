// Stack(Primitive), Heap(Non-Primitive)

//When Stack memory is used that means whatever variable declared , we get copy of that value. Primitive values go to stack.

//When heap memory is used that means we get the original value

//Example of Stack memory

let orginalName = "R7 250";

let anotherName = orginalName; 
anotherName = "GT 730";

console.log(orginalName);
console.log(anotherName);

//Example of Heap Memory

let userOne = {
    name : "Raiyan",
    email : "raiyan@gmail.com"
}

let userTwo = userOne;

userTwo.email = "ahmed@gmail.com" 

console.log(userOne);
console.log(userTwo)
