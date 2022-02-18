const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;

/* let add = document.getElementsByClassName("add-more");
let sub = document.getElementsByClassName("add-less");
let numbItems = document.getElementsByClassName("numb-items"); */
/* console.log(savedProductList); */




    savedProductList.forEach(product => {
    chosenProductCart.innerHTML += 
    `<section id="chosen-product-cart">
    <article class="product-cart-container "id=article-${product.id}>
    <div class="shopping-cart-img"><img src=${product.image}></img></div>
    <div class="layout-text-counter">
    <div class="shopping-cart-text">
    <h2>${product.name}</h2>
    <p>Description: ${product.description}</p>
    </div>
        
    <label for="product-count">antal</label>
    <input type="number" id="product-count" min="1">
    <b>price: ${product.price}</b>
    </div>`;

    console.log(product.price);
    });
    
/*     <div class="shopping-cart-counter">
    <div>
    <p>antal</p>
    <p class="numb-items">1</p>
    </div>
    <div class="shopping-cart-counter-btn">
    <div class="add-more"></div>
    <div class="line-between"></div>
    <div class="add-less"></div>
    </div> */