// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toUTCString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)// one method
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// second method
// let myCreatedDate = new Date("2025-01-14");// third method yyyy-mm-dd
let myCreatedDate = new Date("01-14-2025");// fourth method mm-dd-yyyy

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = new Date.now() // wrong because:Date.now() is a static method of the Date object — you don't use new with it.
let myTimeStamp = Date.now();

// console.log(myTimeStamp.getTime());
// console.log(myCreatedDate.getTime());// Now we can compare two dates.
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
});