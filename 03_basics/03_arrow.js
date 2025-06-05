const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage // no output
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // Do this in browser console

// mehtod1
// function chai() {
//     let username = "Rahul"
//     console.log(this.username);// undefined
// }
// chai()

// method2
// const chai = function () {
//     let username = "Rahul"
//     console.log(this.username);
// }
// chai()

//method3
const chai = () => {
    let username = "Rahul"
    console.log(this.username)
    console.log(this)
}
// chai()

//method4
// const addTwo = (num1, num2) => num1 + num2;// implesit return

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "Rahul"};// undefined

const addTwo = (num1, num2) => ({username: "Rahul"});


console.log(addTwo(3,4))

const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(()=>({}))