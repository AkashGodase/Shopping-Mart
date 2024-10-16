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
        name: 'CHANA DAL',
        image: '1.webp',
        price: 60
    },
    {
        id: 2,
        name: 'SURVOTTAM ATTA',
        image: '1.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'FORTUNE OIL',
        image: '3.webp',
        price: 160
    },
    {
        id: 4,
        name: 'CHAKKI ATTA',
        image: '4.webp',
        price: 100
    },
    {
        id: 5,
        name: 'chana dal',
        image: '5.webp',
        price: 164
    },
    {
        id: 6,
        name: 'TATA SALT',
        image: '6.webp',
        price: 40
    },
    {
        id: 7,
        name: ' SUGER',
        image: '7.jpg',
        price: 65
    }, {
        id: 8,
        name: 'TATA SALT',
        image: '8.webp',
        price: 40
    }, {
        id: 9,
        name: 'GROUND NUT',
        image: '9.webp',
        price: 180
    }, {
        id: 10,
        name: 'FORTUNE KACHHI GHANI SOYABEEN OIL',
        image: '10.webp',
        price: 190
    }, {
        id: 11,
        name: 'ALMONDS',
        image: '11.webp',
        price: 400
    }, {
        id: 12,
        name: 'CHESHEWS',
        image: '12.jpg',
        price: 450
    }, {
        id: 13,
        name: 'REFIND RICE BRAND OIL',
        image: '13.webp',
        price: 220
    }, {
        id: 14,
        name: 'JEERA',
        image: '14.webp',
        price: 240
    }, {
        id: 15,
        name: 'KACHHI GHANI MUSTERED OIL',
        image: '15.webp',
        price: 200
    }, {
        id: 16,
        name: 'GEMINI  SUNFLOWER OIL',
        image: '16.webp',
        price: 160
    }, {
        id: 17,
        name: 'SUZI RAVA',
        image: '17.webp',
        price: 180
    }, {
        id: 18,
        name: 'FORTUN OIL',
        image: '18.webp',
        price: 190
    }, {
        id: 19,
        name: 'YELLO KISHMISH',
        image: '19.webp',
        price: 145
    }, {
        id: 20,
        name: 'AASHIRVAAD ATTA',
        image: '20.webp',
        price: 450
    }, {
        id: 21,
        name: 'MAIDA',
        image: '21.webp',
        price: 120
    }, {
        id: 22,
        name: 'FARD DATES',
        image: '22.webp',
        price: 600
    }, {
        id: 23,
        name: 'BESAN',
        image: '23.webp',
        price: 130
    }, {
        id: 24,
        name: 'GEMINI',
        image: '24.webp',
        price: 1680
    }, {
        id: 25,
        name: 'CHANA DAL',
        image: '25.webp',
        price: 150
    }, {
        id: 26,
        name:' INDIA GATE RICE',
        image: '26.webp',
        price: 250
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