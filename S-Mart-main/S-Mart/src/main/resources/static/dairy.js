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
        name: 'Amul Cool Milk',
        image: '167.webp',
        price: 75
    },
    {
        id: 2,
        name: 'AMUL BUTTER',
        image: '168.webp',
        price: 150
    }, {
        id: 3,
        name:'AMUL TAZA MILK',
        image: '169.webp',
        price: 95
    }, {
        id: 4,
        name: 'AMUL PURE GEE',
        image: '170.webp',
        price: 250
    }, {
        id: 5,
        name: 'NESTLE MilkMaid',
        image: '171.webp',
        price: 120
    }, {
        id: 6,
        name: 'Pure Cow Gee',
        image: '172.webp',
        price: 200
    }, {
        id: 7,
        name: 'AMUL CHEESE',
        image: '173.webp',
        price: 350
    }, {
        id: 8,
        name: 'AMULYA MILK',
        image: '174.webp',
        price: 90
    }, {
        id: 9,
        name: 'AMUL CHEESE BLEND',
        image: '175.webp',
        price: 350
    }, {
        id: 10,
        name: 'AMUL CHEESE BLEND',
        image: '175.webp',
        price: 350
    }, {
        id: 11,
        name: 'AMUL BUTTER',
        image: '176.webp',
        price: 300
    }, {
        id: 12,
        name: 'BUTTER',
        image: '177.webp',
        price: 350
    }, {
        id: 13,
        name: 'AMUL LASSI',
        image: '178.webp',
        price: 25
    }, {
        id: 14,
        name: 'AMULYA MILK',
        image: '179.webp',
        price: 80
    }, 
     {
        id: 15,
        name: 'AMUL COW GEE',
        image: '181.webp',
        price: 180
    }, {
        id: 16,
        name: 'AMUL MASTI',
        image: '182.webp',
        price: 40
    },
     
     {
        id: 18,
        name: 'EVERYDAY MILK',
        image: '185.webp',
        price: 120
    }, {
        id: 19,
        name: 'TREAT CROISSANT',
        image: '186.webp',
        price: 120
    }, {
        id: 20,
        name: 'RUSK TOAST',
        image: '187.webp',
        price: 50
    }, {
        id: 21,
        name: 'Gowardan Gee',
        image: '188.webp',
        price: 1200
    }, {
        id: 22,
        name: 'GOO CHEESE',
        image: '189.webp',
        price: 600
    }, {
        id: 23,
        name: 'AMUL COOL LASSI',
        image: '190.webp',
        price: 40
    }, {
        id: 24,
        name: 'RUSK TOAST',
        image: '191.webp',
        price: 69
    }, {
        id: 25,
        name: 'DARK FANTACY',
        image: '192.webp',
        price: 190
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