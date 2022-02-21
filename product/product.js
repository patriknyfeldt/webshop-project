
const queryString = new URLSearchParams(location.search);
const qsArticles = queryString.get('article');
const productContainer = document.getElementById('product-info');
let idButtton = "";

console.log(qsArticles);

let products = []; // Array to store the data in products.json
let allItems = []; // Array to store products that are copied ^


const getArticles = async () => {
      const response = await fetch('../products.json');
      const data = await response.json();
      products = [...data.products];

      products.forEach(product => {
            let items = product.items;
            items.forEach(item => {
                  allItems.push(item);
            })
            
      })
      console.log(allItems);
      console.log(qsArticles);

      const item = allItems.find(item => item.id === qsArticles);
      console.log(item);

      if(item){
                  
            productContainer.innerHTML += 
                  `<articel class="product-article "id=article-${item.id}>
                  <div class="flex-container">
                  <div class="image-container">
                  <a href="../product/product.html?article=${item.id}"><img class="product-img" src=${item.image} alt= ${item.alt}></img></a>
                  </div>
                  <div class="info-container">
                  <h2>${item.name}</h2>
                  <p>Beskrivning: ${item.description}<p/>
                  <br>
                  <p>Pris: ${item.price}<p/>
                  <br>
                  <button class="add-to-cart" id="addbtn-${item.id}">Köp<button>
                  </div>
                  </div>
                  </article>`;  
      }

console.log(document.getElementById(`addbtn-${item.id}`));
document.getElementById(`addbtn-${item.id}`).addEventListener('click', () => {
      console.log("add to basket");
            // const chosenProduct = listedProducts.find(product => product.id === productID);
            /* console.log(chosenProduct); */

            let articlesForChartObject = JSON.parse(localStorage.getItem("basket"));
            let articlesForChart = [];
            if(articlesForChartObject){
                  articlesForChart = articlesForChartObject.list;
            }

            const existingProduct = articlesForChart.find(a => a.item.id === chosenProduct.id)
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
                  const basketList = {
                  list: articlesForChart
            }
            
            localStorage.setItem("basket", JSON.stringify(basketList));
      })
      addToShoppingCart();
      
}
getArticles();






