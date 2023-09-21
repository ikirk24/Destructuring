1. 
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

// Answer: {numPlanets: 8, yearNeptuneDiscovered: 1846}

2. 
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?

// Answer: {yearNeptuneDiscover: 1846, yearMarsDiscovered: 1649}

3. 
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?

//Answer: - 'Your name is Alejandro and you like purple"
// - 'Your name is Melissa and yoou like green'
// - 'Your namne is undefined and you like green'

4. 
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

// Answer: "Maya", "Marisa", "Chi"

5.
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?

  // Answer: -"Raindrops on roses"
  // - "whiskers on kittens"
  // - "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

6. 
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
  
  console.log(numbers) // ?

  // Answer: [10, 30, 20];

7. 
//   var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

// Answer: const {a,b} = obj.numbers; 

8. 
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// Answer: [arr[0], arr[1]] = [arr[1], arr[0]]

9. 

const RaceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})