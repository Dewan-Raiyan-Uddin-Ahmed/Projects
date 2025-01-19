// const user = {
//     username : "Raiyan",
//     price : 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//     }
// }
// user.welcomeMessage();
// console.log(this)

//.......

// function chai(){
//     let username = "Raiyan";
//     console.log(username);
//     console.log(this.username); // undefined
// }

// chai();

// const chai = function(){
//     let username = "Raiyan";
//     console.log(username);
//     console.log(this.username); // undefined
// }
// chai();

// const chai = () =>{
//     let username = "Raiyan";
//     console.log(username);
//     console.log(this.username); // undefined
// }
// chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//the upper code can be run like this

const addNum = (num1, num2) => num1 + num2;
console.log(addNum(3,4));

// const addNum = (num1, num2) => (num1 + num2);
// console.log(addNum(3,4));

//object can be returned like this

const addNum2 = (num1, num2) => ({username : "Raiyan"})
console.log(addNum2(3,4));