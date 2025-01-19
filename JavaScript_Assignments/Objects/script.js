// Singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Raiyan",
    age : 18,
    "full name" : "Raiyan Ahmed",
    [mySym] : "myKey1",
    location : "NJ",
    email : "raiyan@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "raiyanahmed@gmail.com"
// Object.freeze(JsUser); to freeze obj
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
console.log(JsUser.greeting());



