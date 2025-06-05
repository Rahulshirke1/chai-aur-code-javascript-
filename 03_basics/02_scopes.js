// var c =300
let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     // c = 30
//     console.log(a)
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "Rahul"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website);

    two()

}
// one()

if (true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

// +++++++++++++++++++++ interesting ++++++++++++++++++++++


console.log(addOne(5))// It will not through an error.

function addOne(num) {
    return num + 1
}

addTwo(5)// It will through an error 
const addTwo = function (num) { // some time is called as expression.
    return num + 2
}