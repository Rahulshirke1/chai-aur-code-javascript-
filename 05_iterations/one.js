// for 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]
// }

for(let index=0; index <=10; index++){
    const element = index;
    // console.log(element);

    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i =1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j);
    }

}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// break and continue

// for (let index = 0; index <=20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`)
// }


for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`)
}

















// Pattern1:
//          *****
//          *****
//          *****
//          *****
//          *****
// for( let i= 1 ; i <= 5; i++) {
//     let row = ""
//     for (let j=1; j <= 5; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

// Pattern2:(Right-Angled Triganle)
// *
// **
// ***
// ****
// *****
// for(let i=1; i <=5; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row +="*";
//     }
//     console.log(row)
// }

// Pattern3: (Right-Angled Triangle)
//     *
//    **
//   ***
//  ****
// *****
// for (let i=1; i <= 5; i++) {
//     let row = "";
//     for (let j=1; j<= 5 -i; j++) {
//         row += "-";
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";
//     }
//     console.log(row);
// }

// Pattern4:
//     *
//    ***
//   *****
//  *******
// *********
// for(let i = 1; i <= 5; i++) {
//     let row = "";
//     for(let j = 1; j <= 5 - i; j++) {
//         row += " ";
//     }
//     for (let k = 1; k <= 2 * i -1; k++){
//         row +="*";
//     }
//     console.log(row);
// }
