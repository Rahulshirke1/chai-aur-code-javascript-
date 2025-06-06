const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// example1:
// const newNums = myNums.map( (items, index, arr) =>{
//     return items + 10
// });
// console.log(newNums)

// example2:
const newNums = myNums
                    .map((num) => num * 10 )
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums);