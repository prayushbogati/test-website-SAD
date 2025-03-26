const products = [
    {
        name: "Wireless Mouse",
        category: "Electronics",
        description: "A sleek and ergonomic wireless mouse with long battery life.",
        imageSrc: "https://via.placeholder.com/150?text=Wireless+Mouse"
    },
    {
        name: "Gaming Keyboard",
        category: "Electronics",
        description: "Mechanical RGB gaming keyboard with customizable lighting.",
        imageSrc: "https://via.placeholder.com/150?text=Gaming+Keyboard"
    },
    {
        name: "Running Shoes",
        category: "Footwear",
        description: "Lightweight and breathable running shoes for all terrains.",
        imageSrc: "https://via.placeholder.com/150?text=Running+Shoes"
    },
    {
        name: "Backpack",
        category: "Accessories",
        description: "Waterproof backpack with multiple compartments and laptop sleeve.",
        imageSrc: "https://via.placeholder.com/150?text=Backpack"
    },
    {
        name: "Smartphone Stand",
        category: "Accessories",
        description: "Adiustable smartphone stand with a non-slip base.",
        imageSrc: "https://via.placeholder.com/150?text=Smartphone+Stand"
    },
    {
        name: "Bluetooth Speaker",
        category: "Electronics",
        description: "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
        imageSrc: "https://via.placeholder.com/150?text=Bluetooth+Speaker"
    },
    {
        name: "Coffee Mug",
        category: "Home & Kitchen",
        description: "Ceramic coffee mug with heat-resistant handle.",
        imageSrc: "https://via.placeholder.com/150?text=Coffee+Mug"
    },
    {
        name: "Desk Lamp",
        category: "Home & Office",
        description: "LED desk lamp with adiustable brightness and flexible neck.",
        imageSrc: "https://via.placeholder.com/150?text=Desk+Lamp"
    },
    {
        name: "Yoga Mat",
        category: "Fitness",
        description: "Non-slip yoga mat with extra cushioning for comfort.",
        imageSrc: "https://via.placeholder.com/150?text=Yoga+Mat"
    },
    {
        name: "Wristwatch",
        category: "Accessories",
        description: "Classic analog wristwatch with a leather strap and water resistance.",
        imageSrc: "https://via.placeholder.com/150?text=Wristwatch"
    }
];
let btn = document.querySelectorAll(".btn")
let cards = document.querySelector(".cards")
let i = 0;
btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        cards.innerHTML = "";
        if (e.target.id == "right") {
            i++;
            if (i > products.length - 1) i = 0;
            for (let j = i; j < i + 3; j++) {
                cards.innerHTML += `
                <div class="card">
                <img src="${products[j].imageSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${products[j].name}</h5>
                <p class="card-text">${products[j].description}</p>
                <button class="viewMore">View More</button>
                </div>
                </div>
                `
            }
        }
        if (e.target.id == "left") {
            i--;
            if (i < 0) i = products.length - 1;
            for (let j = i; j < i + 3; j++) {

                cards.innerHTML += `
                <div class="card">
                <img src="${products[j].imageSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${products[j].name}</h5>
                <p class="card-text">${products[j].description}</p>
                <button class="viewMore">View More</button>
                </div>
                </div>
                `
            }
        }
    })
})
for (let j = 0; j < 3; j++) {
    cards.innerHTML += `
<div class="card">
      <img src="${products[j].imageSrc}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[j].name}</h5>
        <p class="card-text">${products[j].description}</p>
        <button class="viewMore">View More</button>
      </div>
    </div>
`
}