// const fbUser = new Object(); singleton

const fbUser = {}
fbUser.id = "123abc"
fbUser.name = "raiyan"
fbUser.isLoggedIn = false
// console.log(fbUser)

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname: {
            firstName : "Raiyan",
            lastName : "Ahmed"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign({},obj1, obj2, obj3);
// Another way
const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4)

// Array of objects
const users = [
    {
        id:1,
        email:"R@gmail.com"
    },
    {
        id:2,
        email:"A@gmail.com"
    },
    {
        id:3,
        email:"I@gmail.com"
    }
]

console.log(users[1]);
console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));
console.log(Object.hasOwnProperty('isLoggedIn'));

