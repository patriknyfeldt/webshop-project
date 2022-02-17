const chosenProductCart = document.getElementById("chosen-product-cart");

let savedProducts = JSON.parse(localStorage.getItem("basket"));
let savedProductList = savedProducts.list;
console.log(savedProductList);


    savedProductList.forEach(product => {
    chosenProductCart.innerHTML += 
    `<section class="products-wrapper">
    <articel class="product-article "id=article-${product.id}>
    <h2>${product.name}</h2>
    <div class="article-content-wrapper">
    <div class="article-left-wrapper">
    <a><img class="product-img" src=${product.image}></img></a>
    </div>
    <div class="article-right-wrapper">
    <p>Description: ${product.description}<p/>
    <br>
    <p>Price: ${product.price}<p/>
    <br>
    <button class="add-to-cart" id="addbtn-${product.id}">lägg till i varukorgen</button>
    </div>
    </div>
    </article>
    </section>`;
        
    });