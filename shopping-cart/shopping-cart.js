const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;
console.log(savedProductList);


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
        
    <div class="shopping-cart-counter">
    <div>
    <p>antal</p>
    <p>1</p>
    </div>
    <div class="shopping-cart-counter-btn">
    <div class="add-more"></div>
    <div class="line-between"></div>
    <div class="add-less"></div>
    </div>

    <b>price: ${product.price}</b>
    </div>`;
        
    });