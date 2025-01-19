function Name(){
    console.log("raiyan");
    
}
// Name();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(1,2);

// function addTwoNumbers(number1, number2){
//     return number1+number2
// }
// const result = addTwoNumbers(1,2);
// console.log(result);

// function logininUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// when value is not passed then the output is undefined
// console.log(logininUserMessage());
// console.log(logininUserMessage("Raiyan"));


function logininUserMessage(username = "User"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(logininUserMessage());
