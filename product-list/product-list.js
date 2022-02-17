
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
const productList = document.getElementById('product-list');
let buttons;
let articles;
let products = [];



const drawProduct = (item) =>

    `<section class="products-wrapper">
    <articel class="product-article "id=article-${item.id}>
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
    <button class="add-to-cart" id="addbtn-${item.id}">lägg till i varukorgen</button>
    </div>
    </div>
    </article>
    </section>`;
    


const getProducts = async () => {
    const response = await fetch('../products.json');
    const data = await response.json();
    products = [...data.products];

    products.forEach(product => {
    if(product.category === qsCategory){
        let items = product.items;
        productList.innerHTML = items.map(drawProduct).join('');
    
        
        //test
        buttons = productList.querySelectorAll(".add-to-cart");
        articles = productList.querySelectorAll(".product-article");
        shoppingCart = document.getElementById("shopping-cart-list");
        let articlesForChart = [];
        let artId;

        buttons.forEach(button => {
            
            button.addEventListener('click', (e) => {
                    let productID = e.target.id.slice(7);

                    articles.forEach(article =>{
                     artId = article.id.slice(8);

                     if(artId === productID){
                         articlesForChart.push(article);
                        console.log(articlesForChart);
                        localStorage.setItem("basket", JSON.stringify(articlesForChart))
                   }   
                                        
                 })
                
                
            })

        })

         
            
           
            
            
            
            
        
            
                
            
    }
    })
   
}

getProducts();

/* articles.forEach((article) => {
    console.log(article);
  }) */

