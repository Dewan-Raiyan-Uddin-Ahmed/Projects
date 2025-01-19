// const coding = ["js", "ruby", "java", "pyhton", "cpp"];

// coding.forEach((val)=>{
//     console.log(val);
// })

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item);
})
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

// let str = "i love my bangladesh"
// let newStr = str.split(" ");

// const largeStr = newStr.reduce((acc,curr)=>{
//     if(acc.length>curr.length){
//         return acc
//     }else{
//         return curr
//     }
// });
// console.log(largeStr);
