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
        name: 'KISSAN FRESH TOMATO KETCHUP',
        image: '27.jpg',
        price: 15
    },
    {
        id: 2,
        name: 'MAGGI NUDDLES',
        image: '28.webp',
        price: 60
    },{
        id: 3,
        name: 'DARK FANTACY',
        image: '29.webp',
        price: 80
    },{
        id: 4,
        name:'NUTRI CHOICE COOKIES',
        image: '30.webp',
        price: 60
    },{
        id: 5,
        name: 'JIMJAM',
        image: '31.webp',
        price: 25
    },{
        id: 6,
        name: 'MAGGI',
        image: '32.webp',
        price: 15
    },{
        id: 7,
        name: 'PARKE G COOKIES',
        image: '34.webp',
        price: 25
    },{
        id: 8,
        name: 'PARLE G COOKIES',
        image: '34.webp',
        price: 25
    },{
        id: 9,
        name: 'MAGGI NUDDLES',
        image: '35.webp',
        price: 12
    },{
        id: 10,
        name: 'GOOD DAY',
        image: '36.webp',
        price: 65
    },{
        id: 11,
        name: 'GOOD DAY FAMILY PACK',
        image: '36.webp',
        price: 250
    },{
        id: 12,
        name: 'BOURBON',
        image: '37.webp',
        price: 160
    },{
        id: 13,
        name: '20-20 GOLD COOKIES',
        image: '38.webp',
        price: 120
    },{
        id: 14,
        name: 'CORN FLAKES',
        image: '39.webp',
        price: 160
    },{
        id: 15,
        name: 'BHUJIYA SHEV',
        image: '40.webp',
        price: 190
    },{
        id: 16,
        name: 'HIDE AND SEEK',
        image: '41.webp',
        price: 250
    },{
        id: 17,
        name: 'MALKIST COOKIES',
        image: '42.webp',
        price: 65
    },{
        id: 18,
        name: 'LOTTO CHOCO PIE',
        image: '43.jpg',
        price: 230
    },{
        id: 19,
        name: 'BINGO',
        image: '44.webp',
        price: 15
    },{
        id: 20,
        name: 'PARLE NUTRICRUNCHI COOKIES',
        image: '45.webp',
        price: 160
    },{
        id: 21,
        name: 'DAIRY MILK',
        image: '46.webp',
        price: 65
    },{
        id: 22,
        name: 'YIPPI NUDDLES',
        image: '47.webp',
        price: 35
    },{
        id: 23,
        name: 'TOMATO KETCHUP',
        image: '48.webp',
        price: 40
    },{
        id: 24,
        name: 'DARK FANTACY',
        image: '29.webp',
        price: 200
    },{
        id: 25,
        name: 'MAD ANGLES',
        image: '50.webp',
        price: 40
    },{
        id: 26,
        name: 'LITTLE HEART',
        image: '51.webp',
        price: 25
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