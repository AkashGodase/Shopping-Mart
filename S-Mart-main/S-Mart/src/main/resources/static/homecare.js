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
        name: 'Surf Exel',
        image: '81.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'SURF EXEL SOAP',
        image: '82.webp',
        price: 10
    },
    {
        id: 3,
        name: 'Surf Exel Soap',
        image: '83.webp',
        price: 10
    }, {
        id: 4,
        name: 'SURF EXCEL',
        image: '84.webp',
        price: 120
    }, {
        id: 5,
        name: 'SHAKTI ACTIVE WHITE',
        image: '85.webp',
        price: 250
    }, {
        id: 2,
        name: 'Tide',
        image: '86.webp',
        price: 200
    }, {
        id: 6,
        name: 'Rin',
        image: '82.webp',
        price: 10
    }, {
        id: 7,
        name: 'Surf Excel',
        image: '87.webp',
        price: 190
    }, {
        id: 8,
        name: 'Comfort',
        image: '88.webp',
        price: 350
    }, {
        id: 9,
        name: 'Surf Excel Machine Wash',
        image: '89.webp',
        price: 90
    }, {
        id: 10,
        name: 'Tide Naturals',
        image: '90.webp',
        price: 180
    }, {
        id: 11,
        name: 'Vim DishWasher',
        image: '91.webp',
        price: 180
    }, {
        id: 12,
        name: 'Rin',
        image: '92.webp',
        price: 500
    }, {
        id: 13,
        name:'Surf Excel Mega Pack',
        image: '93.webp',
        price: 1000
    }, {
        id: 14,
        name: 'Vim Extra',
        image: '94.webp',
        price: 120
    }, {
        id: 15,
        name: 'Surf Excel Extra',
        image: '95.jpg',
        price: 150
    }, {
        id: 16,
        name: 'Surf Excel Machine',
        image: '96.webp',
        price: 220
    }, {
        id: 17,
        name: 'Surf Excel Matic',
        image: '97.webp',
        price: 1200
    }, {
        id: 18,
        name: 'Arial Matic',
        image: '98.webp',
        price: 1100
    }, {
        id: 19,
        name: 'Surf Excel Matic',
        image: '99.jpg',
        price: 1150
    }, {
        id: 20,
        name: 'Rin Detergent Bar',
        image: '100.webp',
        price: 100
    }, {
        id: 21,
        name: 'Patanjali Super',
        image: '101.webp',
        price: 120
    }, {
        id: 22,
        name: 'Rin Detergent Bar',
        image: '102.webp',
        price: 120
    }, {
        id: 23,
        name: 'Surf Excel Matic',
        image: '103.webp',
        price: 150
    }, {
        id: 2,
        name: 'Pitambari',
        image: '104.webp',
        price: 60
    }, {
        id: 2,
        name: 'Genteel',
        image: '105.webp',
        price: 120
    }, {
        id: 2,
        name: 'Harpeec',
        image: '106.webp',
        price: 120
    }, {
        id: 2,
        name: 'EXO',
        image: '107.webp',
        price: 60
    }, {
        id: 2,
        name: 'Surf Excel',
        image: '108.webp',
        price: 150
    }, {
        id: 2,
        name: 'MORE LIGHT',
        image: '109.jpg',
        price: 220
    }, {
        id: 2,
        name: 'COMFORT',
        image: '110.webp',
        price: 260
    }, {
        id: 2,
        name: 'Arial',
        image: '111.webp',
        price: 360
    }, {
        id: 2,
        name: 'Genteel',
        image: '112.webp',
        price: 190
    }, {
        id: 2,
        name: 'Gold Flash',
        image: '113.webp',
        price: 120
    }, {
        id: 2,
        name: 'Vim Dishwash Bar',
        image: '114.webp',
        price: 120000
    }, {
        id: 2,
        name: 'aer ',
        image: '115.webp',
        price: 160
    }, {
        id: 2,
        name: 'LIZOL',
        image: '116.webp',
        price: 265
    }, {
        id: 2,
        name: 'SCRUBZ',
        image: '117.webp',
        price: 60
    }, {
        id: 2,
        name: 'ENZO',
        image: '118.webp',
        price: 120
    }, {
        id: 2,
        name: 'KIVI',
        image: '119.webp',
        price: 50
    },
    {
        id: 2,
        name: 'Comfort',
        image: '120.webp',
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