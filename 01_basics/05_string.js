const name = "Rahul"
const repoCount = 50

// console.log(name + repoCount + " Value"); not recommend

// Instead use backticks`` to concatinate
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Anil-Changdev-Shirke"); 

// console.log(typeof(gameName)) // string type is object
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// index of character
console.log(gameName.indexOf('l'))// character at which index

const newString = gameName.substring(0,3)// starting and ending of string.
console.log(newString)

const anotherString = gameName.slice(-2, 4)// similar to subString but can insert negative value
console.log(anotherString)

const newStringOne = "  Rahul   "
console.log(newString)
console.log(newString.trim()); // removes extra space.

const url = "https://Rahul.com/Rahul%20Shirke"
console.log(url.replace("%20","-"))

console.log(url.includes("Rahul"));

console.log(gameName.split('-'))

