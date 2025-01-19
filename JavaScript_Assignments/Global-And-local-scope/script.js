// let a = 7;

// if(true){
//    let a = 9;
// }

// console.log(a);

// ...............................

// there are errors in the code (intentionally done)

// function one(){
//    const userName = "raiyan"

//    function two(){
//       const website = "youtube"
//       console.log(userName);
//    }
//    console.log(website);
//    two();
   
// }
// one();

// if(true){
//    const userName = "raiyan"
//    if(userName === "raiyan"){
//       const website = " youtube"
//       console.log(userName + website);
//    }
//    console.log(website);
// }
// console.log(userName);

//.................Interesting.....................

// scope level and hoisting

console.log(addOne(5));

function addOne(num){
   return num + 1;
}


addTwo(5);

const addTwo = function(num){
   return num + 2;
}