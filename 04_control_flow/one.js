
// if

 const isUserloggedIn = true
 const temperatur = 41

 if (temperatur === 40) {
    console.log("lesss than 50")
 } else {
    console.log("Temperature is less than 50");
 }

console.log("temperature is greater than 50")

//  comparision operator: < , >, <=, >=, !=, ==, ===.

// const score = 200

// if(score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

const balance = 1000;

// if (balance > 500) console.log("test"),// implesite scope
// console.log("test2");

if (balance > 500) {
    console.log("less than 500")
}else if(balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("les than 750")
}else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
