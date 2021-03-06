
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
            
                  `<div class="flex-container" id=article-${item.id}>
                              <div class="image-container">
                                    <img class="product-img" src=${item.image} alt= ${item.alt}/>
                              </div>
                        <div class="info-container">
                              <h2>${item.name}</h2>
                              <p class="description">Beskrivning: ${item.description}</p>
                              <br>
                              <p class="price">Pris: ${item.price} kr</p>
                              <br>
                              <button class="add-to-cart" id="addbtn-${item.id}">Köp</button>
                              </div>
                        </div>`;  
      }

      document.getElementById(`addbtn-${item.id}`).addEventListener('click', () => {
            // Adds quantity to cart Icon
            let cartIcon = document.querySelectorAll('.cart');
            cartIcon.forEach(cartIcon => {
            let cartCircle = Number(cartIcon.getAttribute('data-count'));
            cartIcon.setAttribute('data-count', cartCircle +1);
            })
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
            basketList.push(articleObj);

      }
      console.log(basketList)
      
      localStorage.setItem("basket", JSON.stringify(basketList));

// addToShoppingCart();
      })
}
getArticles();
