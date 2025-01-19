//object literal 

const user = {
    username:'raiyan',
    login: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from database');
        console.log(this);
        
        
    }
}

console.log(user.login);
user.getUserDetails();
console.log(user.getUserDetails());

const User = (username, loginCount, isLoggedIn)=>{
    this.username = username; // left is variable and right is parameter
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User('raiyan',12,true);
// const userTwo = User('ahmed',13,false);

const userOne = new User('raiyan',12,true);
const userTwo = new User('ahmed',13,false);




