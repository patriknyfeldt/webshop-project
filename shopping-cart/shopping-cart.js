const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;
console.log(savedProductList);



    savedProductList.forEach(product => {
        const article = product.article;
    chosenProductCart.innerHTML += 
    `<section id="chosen-product-cart">
    <article class="product-cart-container "id=article-${article.id}>
    <div class="shopping-cart-img"><img src=${article.image}></img></div>
    <div class="layout-text-counter">
    <div class="shopping-cart-text">
    <h2>${article.name}</h2>
    <p>Description: ${article.description}</p>
    </div>
    <input class="number-inputs" id="count-input-${article.id}" type="number" value="${product.quantity}" min="1"></input>
        
    <b>price: ${article.price}</b>
    </div>`;
        
    });

    const numberInputs = document.querySelectorAll('.number-inputs');
    console.log(numberInputs);
    numberInputs.forEach(input => {
        const inputID = input.id.slice(12);
        const chosenProduct = savedProductList.find(a => a.article.id === inputID);
        console.log(chosenProduct)

        input.addEventListener('change', (e) => {

        })
    })


    // <div class="shopping-cart-counter">
    // <div>
    // <p></p>
    // <p>${product.quantity}</p>
    // </div>
    // <div class="shopping-cart-counter-btn">
    // <div class="add-more"></div>
    // <div class="line-between"></div>
    // <div class="add-less"></div>
    // </div>
