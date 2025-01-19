const name = "Raiyan";
const repoCount = 2

// console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('RaiyanAhmed');
console.log(gameName.__proto__);

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringOne = "    Raiyan   ";
console.log(newStringOne.trim());

const url = "https://google.com/google#40browser";

console.log(url.replace("#40","-"));

const newStringTwo = "I live in NJ";
console.log(newStringTwo.includes("live"));
console.log(newStringTwo.includes("Dhaka"));

const sentance = "Google is in America";
const word = sentance.split(" ");
console.log(word);

const largeWord = word.reduce((acc,cur)=>{
    if(acc.length>cur.length){
        return acc
    }else{
        return cur
    }
});
console.log(largeWord);







