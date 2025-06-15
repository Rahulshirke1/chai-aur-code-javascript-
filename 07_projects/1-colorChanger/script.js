const buttons = document.querySelectorAll('.button');
// console.log(buttons)   

const body = document.querySelector("body")

buttons.forEach((items, index, arr )=>{
    // console.log(items)
    items.addEventListener('click', (e)=>{
        // console.log(e)
        // console.log(e.target)
        console.log(e.target.id)
        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id // or 'grey'
        }
        if (e.target.id == 'white') {
            body.style.backgroundColor = e.target.id // or 'grey'
        }
        if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id // or 'grey'
        }
        if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id // or 'grey'
        }
        if (e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id // or 'grey'
        }

    })
})