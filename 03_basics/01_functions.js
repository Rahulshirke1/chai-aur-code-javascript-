
function sayMyName() {
    console.log("R")
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

// sayMyName().console.log(0) // output - R
// sayMyName()

function addTwoNumbers(Number1, Number2) {
    // let result = Number1 + Number2
    // return result;

    return Number1 + Number2
}

// addTwoNumbers() // NaN
const result = addTwoNumbers(3, 5)

// console.log("Result:",result);

function loginUserMessage(username = "saam") {
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
}

// loginUserMessage("Rahul")
console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage())

// ... is a rest/spread operator

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username: "Rahul",
    price: 199
}


function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))