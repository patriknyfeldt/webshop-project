
const queryString = new URLSearchParams(location.search);
const qsArticles = queryString.get('article');
const productContainer = document.getElementById('product-info');
let product;


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

      const item = allItems.find(item => item.id === qsArticles);
      product = item;

      if(item){
                  
            productContainer.innerHTML += 
                  `<articel class="product-article "id=article-${item.id}>
                        <div class="flex-container">
                              <div class="image-container">
                                    <a href="../product/product.html?article=${item.id}"><img class="product-img" src=${item.image} alt= ${item.alt}></img></a>
                              </div>
                        <div class="info-container">
                              <h2>${item.name}</h2>
                              <p>Beskrivning: ${item.description}</p>
                              <br>
                              <p class="price">Pris: ${item.price} kr</p>
                              <br>
                              <button class="add-to-cart" id="addbtn-${item.id}">Köp</button>
                              </div>
                        </div>
                  </article>`;  
      }

document.getElementById(`addbtn-${item.id}`).addEventListener('click', () => {

      let basketListObject = JSON.parse(localStorage.getItem("basket"));
      let basketList = [];
      if(basketListObject){
            basketList = basketListObject;
      }
      
      console.log(basketList)
      const existingProduct = basketList.find(a => a.article.id === product.id)
      if(existingProduct){
            existingProduct.quantity++
      }
      else if(!existingProduct){
            const articleObj = {
                  quantity: 1,
                  article: product
            }
<<<<<<< HEAD
<<<<<<< HEAD
            
      })
      let buttons = document.querySelectorAll(".add-to-cart");

      addBtn.addEventListener('click', () => {
            console.log('hej');
      })
=======
            articlesForChart.push(articleObj);
      }
      const basketList = {
            list: articlesForChart
=======
            basketList.push(articleObj);
>>>>>>> 0374f78accdaa2101492e12606d80c71111a4b6d
      }
      console.log(basketList)
      
      localStorage.setItem("basket", JSON.stringify(basketList));
})
// addToShoppingCart();
>>>>>>> 587443efa6baaec2fc267d979fcbf306c8f8b4fb
      
}
getArticles();






