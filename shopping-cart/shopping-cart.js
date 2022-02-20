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
                <div class="layout-text-counter">
                    <div class="shopping-cart-text">
                        <h2>${article.name}</h2>
                        <p>Description: ${article.description}</p>
                    </div>
                    <span id="count-input-${article.id}">${product.quantity}</span>
                    <input class="number-inputs" type="button" id="decrement-${article.id}" value="<" >
                    <input class="number-inputs" type="button" id="increment-${article.id}" value=">">
                    <b>price: ${article.price}</b>
                    <input type="button" id="remove-${article.id}" value="remove">
                </div>
            </article>
        </section>
        `;
});
chosenProductCart.innerHTML += `
    <div>
        <p id="total-price" >Total: 0</p>
    </div>
`;
let totalPriceDisplay = document.getElementById("total-price");

calculateSum();

document.querySelectorAll('input[id*="increment"]').forEach(input => {
    const inputID = input.id.slice(10);
    console.log(inputID)
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
    console.log(inputID)
    const chosenProduct = savedProductList.find(a => a.article.id === inputID);
    // console.log(chosenProduct);
    
    input.addEventListener('click', (e) => {
        if(chosenProduct.quantity <= 1){
            return;
        }
        chosenProduct.quantity--;
        document.getElementById(`count-input-${inputID}`).innerText = chosenProduct.quantity;
        console.log(savedProducts);
        localStorage.setItem("basket", JSON.stringify(savedProducts));
        calculateSum();
    })
})

function calculateSum(){
    let sum = 0;
    savedProductList.forEach(p => sum += p.article.price * p.quantity);
    console.log("sum: " + sum);
    totalPriceDisplay.textContent = `Total pris: ${sum}`;
}


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
