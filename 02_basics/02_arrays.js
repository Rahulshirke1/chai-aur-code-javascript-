let marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];




// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros.join(dc_heros))

// concatenate arrays
// marvel_heros = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]// ... because of its not array now it is now distributed in it is also called as spread operator
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Rahul"));
// console.log(Array.from( { name: "Rahul" } ));// interesting  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));