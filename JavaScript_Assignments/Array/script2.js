const marvel_heroes = ["Thor","Ironman","Spiderman"];
const dc = ["Superman", "flash", "Batman"]

// marvel_heroes.push(dc);

// 1st method

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

// 2nd method

// let allHeroes = marvel_heroes.concat(dc);
// console.log(allHeroes);

// 3rd method

// let allHeroes2 = [...marvel_heroes,...dc];
// console.log(allHeroes2);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(another_array.flat(Infinity));


// console.log(Array.isArray("Raiyan"));
// console.log(Array.from("Raiyan"));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));

let arr = [1,2,3,4,5,6];

for(let newArr of arr){
    console.log(newArr)
}




