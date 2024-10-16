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
        name: 'ONIAN',
        image: 'onion.webp',
        price: 120000
    },
    {
        id: 2,
        name: 'POTATO',
        image: 'batata.webp',
        price: 120000
    },
    {
        id: 3,
        name: 'GINGER',
        image: 'aale.webp',
        price: 220000
    },
    {
        id: 4,
        name: 'BEANS',
        image: 'beans.webp',
        price: 123000
    },
    {
        id: 5,
        name: 'OKARA',
        image: 'bhendi.webp',
        price: 320000
    },
    {
        id: 6,
        name: 'CARROT',
        image: 'gajar.webp',
        price: 120000
    },
    {
        id: 7,
        name: 'CARROT',
        image: 'gajar.webp',
        price: 120000
    },
    {
        id: 8,
        name: 'CURRY LEAVES',
        image: 'kadipatta.webp',
        price: 120000
    },
    {
        id: 9,
        name: 'GARLIC',
        image: 'lasun.webp',
        price: 120000
    },
    {
        id: 10,
        name: 'LEMON',
        image: 'limbu.webp',
        price: 120000
    },
    {
        id: 11,
        name: 'GREEN CHILLI',
        image: 'mirchi.webp',
        price: 120000
    },
    {
        id: 12,
        name: 'DRUM STICK',
        image: 'shevga.webp',
        price: 120000
    },
    {
        id: 13,
        name: 'GREEN CAPSICUM',
        image: 'shimla.webp',
        price: 120000
    },
    {
        id: 14,
        name: 'TOMATO',
        image: 'tomoto.webp',
        price: 120000
    },
    {
        id: 15,
        name: 'RIDGE GOURD',
        image: 'dodka.webp',
        price: 120000
    }, 
    {
        id: 16,
        name: 'CAULIFLOWER',
        image: 'flower.webp',
        price: 120000
    },
     {
        id: 17,
        name: 'CLUSTER BEANS',
        image: 'gavar.webp',
        price: 120000
    },
     {
        id: 18,
        name: 'ZUKKINI',
        image: 'kakdi.webp',
        price: 120000
    }, 
    {
        id: 19,
        name: 'GREEN CHILLI',
        image: 'mirchi.webp',
        price: 120000
    },
     {
        id: 20,
        name: 'PAALAK',
        image: 'palak.webp',
        price: 120000
    },
    {
        id: 21,
        name: 'BRIJAL BLACK',
        image: 'vangi black.webp',
        price: 120000
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