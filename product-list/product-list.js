const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
document.querySelector('h1').innerText = qsCategory;
const productList = document.getElementById('product-list');
let products = [];
let searchedItems = [];

const searchProductsForm = document.getElementById('search-products-form');
const searchProductsInputField = document.getElementById('search-products-inputfield');

const drawProduct = (item) =>
    
    `<div class="products-wrapper">
        <articel class="product-article "id=${item.id}>
            <h2>${item.name}</h2>
            <div class="article-content-wrapper">
                <div class="article-left-wrapper">
                    <a><img class="product-img" src=${item.image}></img></a>
                </div>
                <div class="article-right-wrapper">
                    <p>Description: ${item.description}<p/>
                    <br>
                    <p>Price: ${item.price}<p/>
                    <br>
                    <button id="add-btn-${item.id}">lägg till i varukorgen</button>
                </div>
            </div>
        </article>
    </div>`;


const getProducts = async (inputValue) => {
    const response = await fetch('../products.json');
    const data = await response.json();
    products = [...data.products];
    
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
}

const getSearchedProducts = ((item, inputValue) => {
    let itemDescription = item.description.toLowerCase();
    let itemName = item.name.toLowerCase();

    if(itemDescription.includes(inputValue)){
        searchedItems.push(item);
        console.log(searchedItems);
        productList.innerHTML = searchedItems.map(drawProduct).join(''); 

    }
    if(inputValue === itemName){
        searchedItems.push(item);
        console.log(searchedItems);
        productList.innerHTML = searchedItems.map(drawProduct).join(''); 
    }

})

searchProductsForm.addEventListener('input', (e) => {
    e.preventDefault();
    let inputValue = searchProductsInputField.value.toLowerCase();
    getProducts(inputValue);
    
})
getProducts();