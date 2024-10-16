let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'PEAR',
        image: '54.webp',
        price: 60
    },
    {
        id: 2,
        name: 'APPLE',
        image: '55.webp',
        price: 290
    },
    {
        id: 3,
        name: 'APPLE',
        image: '56.webp',
        price: 250
    },
    {
        id: 4,
        name: 'GREEN APPLE',
        image: '57.webp',
        price: 190
    },
    {
        id: 5,
        name: 'CURATE',
        image: '58.webp',
        price: 120
    },
    {
        id: 6,
        name: 'WATERMELON',
        image: '59.webp',
        price: 120
    },
    {
        id: 7,
        name: 'BANANA',
        image: '60.webp',
        price: 60
    },
    {
        id: 8,
        name: 'COCONUT',
        image: '61.webp',
        price: 120
    },
    {
        id: 9,
        name: 'WATERMELON',
        image: '62.webp',
        price: 120
    },
    {
        id: 10,
        name: 'MUSKMELON MADHUMATI',
        image: '63.webp',
        price: 350
    },
    {
        id: 11,
        name: 'MUSKMELON ALIA',
        image: '64.webp',
        price: 350
    },
    {
        id: 12,
        name: 'BLUEBERRY',
        image: '65.webp',
        price: 120
    },
    {
        id: 13,
        name: 'DRAGON',
        image: '66.webp',
        price: 2000
    },
    {
        id: 14,
        name: 'RASPBERRY',
        image: '67.webp',
        price: 250
    },
    {
        id: 15,
        name: 'KIVI GREEN',
        image: '68.webp',
        price: 120
    },
    {
        id: 16,
        name: 'SWEET TAMARIND',
        image: '69.webp',
        price: 90
    },
    {
        id: 17,
        name: 'RED CHERRY',
        image: '70.webp',
        price: 1200
    },
    {
        id: 18,
        name: 'GRAPES GREEN SONAKA',
        image: '71.webp',
        price: 120
    },
    {
        id: 19,
        name: 'ORANGE',
        image: '72.webp',
        price: 300
    },
    {
        id: 20,
        name: 'MANGO',
        image: '73.webp',
        price: 700
    },
    {
        id: 21,
        name: 'PINEAPPLE',
        image: '74.webp',
        price: 120
    },
    {
        id: 22,
        name: 'PROMEGRANTE',
        image: '75.webp',
        price: 120
    },
    {
        id: 23,
        name: 'PAPAYA',
        image: '76.webp',
        price: 100
    },
    {
        id: 24,
        name: 'APRICOT',
        image: '77.webp',
        price: 600
    },
    {
        id: 25,
        name: 'WOOD APPLE',
        image: '78.webp',
        price: 12000
    },
    {
        id: 26,
        name: 'GUAVA',
        image: '79.webp',
        price: 100
    },
    {
        id: 27,
        name: 'RAMPHAL',
        image: '80.webp',
        price: 120
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
function checkout() {
    // Calculate the total price of all items in the cart
    let totalPrice = 0;
    listCards.forEach((value) => {
        totalPrice += value.price;
    });

    // Display a confirmation message or perform further actions (e.g., redirect to payment page)
    alert(`Total Price: ${totalPrice.toLocaleString()} - Redirecting to payment page...`);

    // Optionally, you can reset the cart after checkout
    listCards = [];
    reloadCard();
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}