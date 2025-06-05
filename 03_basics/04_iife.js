// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`)
})();// will get exicuted

((name)=> {
    // Unamed IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
})("Rahul");
 