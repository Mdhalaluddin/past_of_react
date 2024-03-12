// catch dom elements
const button = document.getElementById('button')
const price = document.getElementById('price')
const total = document.getElementById('total')



// state on data
const productPrice = 9000;
let totalPrice = 0;


// set product price initially

price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ 0 `;

button.addEventListener('click', () => {
    totalPrice += productPrice;

    // update UI
    total.innerText = `total: ৳ ${productPrice}`;

})