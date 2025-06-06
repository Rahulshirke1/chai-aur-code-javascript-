const myNums = [1, 2, 3]

const myTotal = myNums.reduce((accumulator, currentvalue)=> {
    console.log(`accumulator: ${accumulator} \ncurrentvalue: ${currentvalue}`)
    return accumulator + currentvalue
}, initialvalue = 0)

console.log("myTotal:" , myTotal)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data science Course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);