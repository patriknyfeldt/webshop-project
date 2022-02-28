const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts;
let totalPriceDisplay;

if(savedProductList){
savedProductList.forEach(product => {
    const article = product.article;
    chosenProductCart.innerHTML += 
    `<section id="chosen-product-cart-${article.id}">
    <article class="product-cart-container "id=article-${article.id}>
        <div class="shopping-cart-img"><img src=${article.image}></img></div>
        
        <div class="name-and-counter">
        
                <div class="shopping-cart-text">
                    <h2>${article.name}</h2>
                    <p>Description: ${article.description}</p>
                </div>
            <div class="counter-and-price">
                <div class="counter">
                    
                    <div class="arrows">
                    <button class="number-inputs arrow-up" type="button" id="decrement-${article.id}"><i class="fa-solid fa-minus"></i></button>
                        <div class="number-of-items"><span id="count-input-${article.id}">${product.quantity}</span></div>
                        <button class="number-inputs arrow-up" type="button" id="increment-${article.id}"><i class="fa-solid fa-plus"></i></button>
                        
                    </div>
                    <div class="price-remove">
                        <b>price: ${article.price}</b>
                        <button class="remove-btn" id="remove-${article.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        </article>
    </section>
`;
    });
    if(savedProductList.length){
        chosenProductCart.innerHTML += `
            <div id="order-row" class="checkout-wrapper">
                <div class="checkout">
                    <span id="total-price" class="total-sum">Total: 0
                    </span>
                    
                    <span>
                    <a href="../order/order.html"><button class="checkout-btn lightgreen">Kassa</button></a>
                    </span>
                </div>
            </div>
        `;
    }
    else{
        document.getElementById("empty-cart-message").classList.remove("hidden");
    }
    totalPriceDisplay = document.getElementById("total-price");
    calculateSum();

}
else{
    document.getElementById("empty-cart-message").classList.remove("hidden");
}


document.querySelectorAll('button[id*="increment"]').forEach(input => {
    const inputID = input.id.slice(10);
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    
    input.addEventListener('click', (e) => {
        chosenProduct.quantity++;
        document.getElementById(`count-input-${inputID}`).innerText = chosenProduct.quantity;
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

document.querySelectorAll('button[id*="decrement"]').forEach(input => {
    const inputID = input.id.slice(10);
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    
    input.addEventListener('click', (e) => {
        if(chosenProduct.quantity <= 1){
            return;
        }
        chosenProduct.quantity--;
        document.getElementById(`count-input-${inputID}`).innerText = chosenProduct.quantity;
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

document.querySelectorAll('button[id*="remove"]').forEach(input =>{
    const inputID = input.id.slice(7);
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    document.getElementById(`remove-${inputID}`).addEventListener("click", ()=>{
        savedProductList.splice(savedProductList.indexOf(chosenProduct), 1);
        document.getElementById(`chosen-product-cart-${inputID}`).remove();
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

function calculateSum(){
    if(savedProductList.length === 0){
        if(document.getElementById("order-row")){
            document.getElementById("order-row").innerHTML = "  ";
        }  
        document.getElementById("empty-cart-message").classList.remove("hidden");
        /* totalPriceDisplay.textContent = "Total: 0"; */
    }
    else{
        totalPriceDisplay.textContent ="Total: " +  savedProductList.reduce((total, p) => total += p.article.price * p.quantity, 0);

    }
}

