// const coding = ["js", "ruby", "java", "python", "cpp"]


//example1:
// const values = coding.forEach((item, index,arr)=>{
//     // console.log(item)
//     return item
// })
// // foreach doesn't return value

// console.log(values);


// example2:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbs.filter( (item, index, arr)=> item > 4); // it returns value
const newNums = myNums.filter((item, index, arr) => {
    return item > 4
})// it returns value
// console.log(newNums);

// example 3:
// const setOfNums = []

// myNums.forEach( (num)=>{
//     if(num > 4){
//         setOfNums.push(num)
//     }
// });
// console.log(setOfNums)



// example 4:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//q1:genre=history
// const userBooks = books.filter((itmes, index, arr) => {
//     return itmes.genre === 'History'
// });
// console.log(userBooks)

//q2: publised after 1995
const userBooks = books.filter((itmes, index, arr) =>{
    return itmes.publish >= 1995
})
console.log(userBooks)