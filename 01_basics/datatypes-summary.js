//  # Primitive 
// 7 types: String , Number, Boolean, null(chali), undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // default undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3423908934534n // when you enter n it automatically becomes bigInt



// # Non Primitive( Reference)
// types: Array, Objects, functions

const heros = ["Shaktiman", "naagraj", "doga"];
// object
let myObj = {
    name: "Rahul",
    age: 22, 
}

const myFunction = function(){
    console.log("hello world");
}
const m= ()=>{
   console.log("hello world");
}
console.log(typeof id)