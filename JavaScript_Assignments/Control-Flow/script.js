// if 

if(condition){

}

// >, <, ==, ===, <=, >=, !=, ===, !==

const score = 100
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);   
}
console.log(`User power: ${power}`);   // out of scope

const balance = 1000

//implicit scope
// if(balance>500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}

// Switch case .....

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case matched");
        
        break;
}