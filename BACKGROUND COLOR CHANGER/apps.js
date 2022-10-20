let btn = document.getElementsByClassName('btn')[0]
let arr = ['yellow', 'red', 'cyan', 'blue', 'pink', 'aqua']

// console.log(Math.ceil(Math.random() * 5))

// console.log(Math.floor(Math.random() * 5))  


// console.log(Math.random() * 5)


btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 6)
    console.log(randomNumber)
    document.body.style.backgroundColor = arr[randomNumber]
})





// Math.ceil() - rounds the number to a higher value
// Math.floor() - rounds the number to a lower value
// Math.round() - rounds the number to either lower or higher value, depending on the number


// The Math class provides us with great math - related helper methods.One of them is the Math.random() method, which returns a random value between 0..1.