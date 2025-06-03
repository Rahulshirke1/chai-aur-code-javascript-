// singleton through constructor like - Object.create (constructor through)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rahul",
    age: 18,
    location: "jaipur",
    "full name": "Rahul Shirke",
    [mySym]: "mykey1",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["full name"]);
// console.log(JsUser"full name"); wrong
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "microsoft@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log(`Hello Js user, ${this.name }`);
}
JsUser.greetingTwo = function (){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
