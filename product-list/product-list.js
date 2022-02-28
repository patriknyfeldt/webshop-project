const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
document.querySelector('h1').innerText = qsCategory;
const productList = document.getElementById('product-list');
let buttons;
let articles;
let products = [];
let listedProducts = []
let searchedItems = [];

const searchProductsForm = document.getElementById('search-products-form');
const searchProductsInputField = document.getElementById('search-products-inputfield');

// RITAR UT PRODUKTERNA
const drawProduct = (item) =>

    `<div class="products-wrapper">
        <articel class="product-article "id=article-${item.id}>
            <div class="article-content-wrapper">
                <div class="article-left-wrapper">
                    <h2>${item.name}</h2>
                    <a class="img-link" href="../product/product.html?article=${item.id}">
                    <img class="product-img" src=${item.image} alt="${item.alt}"></img></a>
                </div>
                <div class="article-right-wrapper">
                    <p class="description-paragraph">${item.description}<p/>
                    <br>
                    <p class="price-paragraph" >Pris: ${item.price}<p/>
                    <br>
                    <button class="add-to-cart" id="addbtn-${item.id}">lägg till i varukorgen</button>
                </div>
            </div>
        </article>
    </div>`;

    // HÄMTAR DATA FRÅN JSON OCH KÖR DRAWPRODUCT FÖR VARJE ITEM PÅ AKTUELL SIDA
    const getProducts = async (inputValue) => {
        const response = await fetch('../products.json');
        const data = await response.json();
        products = [...data.products];
        listedProducts = products.find(e => e.category === qsCategory).items;
        
        products.forEach(product => {
            if(product.category === qsCategory){
                let items = product.items;        
                productList.innerHTML = items.map(drawProduct).join(''); 
                searchedItems = [];
        
                items.forEach(item => {
                    getSearchedProducts(item, inputValue);
                })
            }
        })

        // TILLHÖR VARUKORGS FUNKTIONEN

        buttons = productList.querySelectorAll(".add-to-cart");
        articles = productList.querySelectorAll(".product-article");
        
        buttons.forEach(button => {
            
            button.addEventListener('click', (e) => {
                let productID = e.target.id.slice(7);
                
                const chosenProduct = listedProducts.find(product => product.id === productID);

                let basketList = JSON.parse(localStorage.getItem("basket"));
                let articlesForChart = [];
                if(basketList){
                    articlesForChart = basketList;
                }

                const existingProduct = articlesForChart.find(a => a.article.id === chosenProduct.id)
                if(existingProduct){
                    existingProduct.quantity++
                }
                else if(!existingProduct){
                    const articleObj = {
                        quantity: 1,
                        article: chosenProduct
                    }
                    articlesForChart.push(articleObj);
                }

                localStorage.setItem("basket", JSON.stringify(articlesForChart));
                
                
            })

        }) 
    
}

// TILLHÖR SÖKFUNTIONEN

const getSearchedProducts = ((item, inputValue) => {
    let itemDescription = item.description.toLowerCase();
    let itemName = item.name.toLowerCase();

    if(itemDescription.includes(inputValue)){
        searchedItems.push(item);
        productList.innerHTML = searchedItems.map(drawProduct).join('');

    }
    if(inputValue === itemName){
        searchedItems.push(item);
        productList.innerHTML = searchedItems.map(drawProduct).join('');
    }
    
})

searchProductsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = searchProductsInputField.value.toLowerCase();
    getProducts(inputValue);
    searchProductsInputField.value = "";

})

getProducts();
