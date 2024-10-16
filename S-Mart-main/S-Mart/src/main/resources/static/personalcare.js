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
        name: 'Closeup',
        image: '121.webp',
        price: 50
    },
    {
        id: 1,
        name: 'Colgate',
        image: '122.jpg',
        price: 80
    },
    {
        id: 1,
        name: 'Pears',
        image: '123.webp',
        price: 45
    }, {
        id: 1,
        name: 'Triphla Juice',
        image: '124.webp',
        price: 150
    }, {
        id: 1,
        name: 'parachute oil',
        image: '125.webp',
        price: 120
    }, {
        id: 1,
        name: 'Dove',
        image: '126.webp',
        price: 65
    }, {
        id: 1,
        name: 'Colgate Maxfresh',
        image: '127.webp',
        price: 60
    }, {
        id: 1,
        name: 'Parachute',
        image: '128.webp',
        price: 120
    }, {
        id: 1,
        name: 'WEIGHTPLUS',
        image: '129.webp',
        price: 250
    }, {
        id: 1,
        name: 'Lifebuoy',
        image: '130.webp',
        price: 40
    }, {
        id: 1,
        name: 'CINTHOL',
        image: '131.webp',
        price: 65
    }, {
        id: 1,
        name: 'Nivea Soft',
        image: '132.webp',
        price: 140
    }, {
        id: 1,
        name: 'Colgate Mega Sever',
        image: '133.jpg',
        price: 250
    }, {
        id: 1,
        name: 'Plant Protein',
        image: '134.webp',
        price: 120
    }, {
        id: 1,
        name: 'LUX',
        image: '135.webp',
        price: 40
    }, {
        id: 1,
        name: 'Daber Anmol Gold',
        image: '136.webp',
        price: 120
    }, {
        id: 1,
        name: 'Dantkranti',
        image: '137.webp',
        price: 75
    }, {
        id: 1,
        name: 'Aloveera Juice',
        image: '138.webp',
        price: 120
    }, {
        id: 1,
        name: 'Parachute',
        image: '139.webp',
        price: 120
    }, {
        id: 1,
        name: 'Mysure Sandal Soap',
        image: '140.jpg',
        price:85
    }, {
        id: 1,
        name: 'Dove Shampoo',
        image: '141.webp',
        price: 250
    }, {
        id: 1,
        name: 'Pears',
        image: '142.webp',
        price: 110
    }, {
        id: 1,
        name: 'Godrej NO 1',
        image: '143.webp',
        price: 550
    }, {
        id: 1,
        name: 'Pepsodent',
        image: '144.webp',
        price: 122
    }, {
        id: 1,
        name: 'Red Gel',
        image: '145.webp',
        price: 120
    }, {
        id: 1,
        name: 'DR.Vaidya Liver Care',
        image: '146.webp',
        price: 1200
    }, {
        id: 1,
        name: 'SENSODYNE',
        image: '147.webp',
        price: 800
    }, {
        id: 1,
        name: 'Dove Daily Shine Shampoo',
        image: '148.webp',
        price: 600
    }, {
        id: 1,
        name: 'MESWAK',
        image: '149.webp',
        price: 400
    }, {
        id: 1,
        name: 'POUNDS',
        image: '150.webp',
        price: 550
    }, {
        id: 1,
        name: 'Apple Vinegar',
        image: '151.jpg',
        price: 250
    }, {
        id: 1,
        name: 'Santoor Handwash',
        image: '152.webp',
        price: 220
    }, {
        id: 1,
        name: 'Sunsilk Shampoo',
        image: '153.webp',
        price: 250
    }, {
        id: 1,
        name: 'Dove Soap',
        image: '154.webp',
        price: 120
    }, {
        id: 1,
        name: 'Clinic Plus Shampoo',
        image: '155.webp',
        price: 160
    }, {
        id: 1,
        name: 'Pears',
        image: '156.webp',
        price: 120
    }, {
        id: 1,
        name: 'HERBOSLIM',
        image: '157.webp',
        price: 260
    }, {
        id: 1,
        name: 'Godrej no 1',
        image: '158.webp',
        price: 180
    }, {
        id: 1,
        name: 'Godrej no1',
        image: '158.webp',
        price: 120
    }, {
        id: 1,
        name: 'Mysore Sandal Soap',
        image: '159.webp',
        price: 40
    }, {
        id: 1,
        name: 'LIFEBOUY',
        image: '160.webp',
        price: 65
    }, {
        id: 1,
        name: 'VIVEL',
        image: '161.webp',
        price: 240
    }, {
        id: 1,
        name: 'NIVEA MEN',
        image: '162.webp',
        price: 240
    }, {
        id: 1,
        name: 'HERBLE HILLS',
        image: '163.webp',
        price: 350
    }, {
        id: 1,
        name: 'TRLSemme',
        image: '164.webp',
        price: 900
    }, {
        id: 1,
        name: 'GARNIER',
        image: '165.webp',
        price: 160
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