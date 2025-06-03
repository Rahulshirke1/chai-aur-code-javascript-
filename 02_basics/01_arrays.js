// array

// [] - square brackets
// () - paranthesis
// {} - brasis

// console in browser ma const numbers = [1,2,3,4]
// numbers

// const myArr = [0, 1, 2, 3 , 4, 5, true, "Rahul"]// can insert different datatypes
const myArr = [0, 1, 2, 3 , 4, 5]
const myHeors = ["shaktiman", "gaagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array methods


// ------------------------------------------
//                                  _              _
// myArr.push(6)// adds element   --|                |
                                //  | From the last  |
// myArr.pop() // remove elements --|_              _|

// ----------------------------------------------------
//                                      _              _
// myArr.unshift(6)// adds element   --|                |
//                                     | From the start |
// myArr.shift() // remove elements  --|_              _|

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()// Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(typeof newArr)//check the type

// slice, splice

// console.log("A", myArr)
const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// console.log("c", myArr)
// console.log(myn2)