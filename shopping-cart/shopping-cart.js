const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;



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
    <input type="number" class="countInputs" id="product-count-${product.id}" min="1" value="1">
    <b>price: ${product.price}</b>
    </div>`;

    
    });










