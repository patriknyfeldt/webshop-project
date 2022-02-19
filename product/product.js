
const queryString = new URLSearchParams(location.search);
const qsArticles = queryString.get('article');
const productContainer = document.getElementById('product-info');

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

      allItems.forEach(item => {

            if(item.id === qsArticles){
                  
            productContainer.innerHTML += 
                  `<articel class="product-article "id=article-${item.id}>
                  <div class="flex-container">
                  <div class="image-container">
                  <h2>${item.name}</h2>
                  <a href="../product/product.html?article=${item.id}"><img class="product-img" src=${item.image}></img></a>
                  </div>
                  <div class="info-container">
                  <p>Beskrivning: ${item.description}<p/>
                  <br>
                  <p>Pris: ${item.price}<p/>
                  <br>
                  <button class="add-to-cart" id="addbtn-${item.id}">Köp<button>
                  </div>
                  </div>
                  </article>`;  
            }
      })
      
}
getArticles();






