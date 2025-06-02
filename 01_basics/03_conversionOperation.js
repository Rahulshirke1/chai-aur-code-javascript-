// let score = null; // output will be 0 because score is null.
// let score = "33abc"; // output will be NaN because score is 33abc which is converted to number.
// let score = undefined; // output will be NaN because score is undefined.
// let score = true;// output will be 1 because score is true.

// Convert to Number
let score = "Rahul"// output will be NaN because score is Rahul(string).
// console.log(typeof score);
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// --------------------convert to boolean
// let isLoggedIn = 1;// 1=> true
// let isLoggedIn = "Rahul"; //"Rahul" => true
let isLoggedIn = ""; // ""=>flase

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// convet to string  
let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber)

// **************** Operations **********************
let value = 3;
let negValue =-value;
// console.log(negValue);

// Arithmatic
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " Rahul";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100;
++gameCounter || gameCounter++;
console.log(gameCounter);
