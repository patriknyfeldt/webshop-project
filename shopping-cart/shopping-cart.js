const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;

// console.log(`savedProductList:`);
//console.log(savedProductList)

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
                            <div class="number-of-items"><span id="count-input-${article.id}">${product.quantity}</span></div>
                            <div class="arrows">
                                <input class="number-inputs arrow-up" type="button" id="increment-${article.id}" value=">">
                                
                                <input class="number-inputs arrow-down" type="button" id="decrement-${article.id}" value="<" >
                            </div>
                        </div>
                            <b>price: ${article.price}</b>
                            <button class="remove-btn" id="remove-${article.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </article>
        </section>
    `;
});
if(savedProductList.length){
    console.log("create price and order display")
    chosenProductCart.innerHTML += `
        <div id="order-row" class="checkout">
            <span id="total-price">Total: 0
            </span>
            
            <span>
                <a href="../order/order.html">Till beställning</a>
            </span>
        </div>
    `;
}
else{
    document.getElementById("empty-cart-message").classList.remove("hidden");
}
let totalPriceDisplay = document.getElementById("total-price");
calculateSum();

document.querySelectorAll('input[id*="increment"]').forEach(input => {
    const inputID = input.id.slice(10);
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    // console.log(chosenProduct);
    
    input.addEventListener('click', (e) => {
        chosenProduct.quantity++;
        document.getElementById(`count-input-${inputID}`).innerText = chosenProduct.quantity;
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

document.querySelectorAll('input[id*="decrement"]').forEach(input => {
    const inputID = input.id.slice(10);
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    // console.log(chosenProduct);
    
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
        console.log(savedProducts);
        document.getElementById(`chosen-product-cart-${inputID}`).remove();
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

function calculateSum(){
    console.log(savedProductList)
    if(savedProductList.length === 0){
        if(document.getElementById("order-row")){
            document.getElementById("order-row").classList.add("hidden");
        }  
        document.getElementById("empty-cart-message").classList.remove("hidden");
        /* totalPriceDisplay.textContent = "Total: 0"; */
    }
    else{
        totalPriceDisplay.textContent ="Total: " +  savedProductList.reduce((total, p) => total += p.article.price * p.quantity, 0);

    }
}

