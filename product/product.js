const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('article');
const productContainer = document.querySelector('product-info');
// Variable name examples: productItem, info , (content), (item)
let products = [];
let allItems = [];

const renderProduct = (item) => 

`<section class="products-wrapper">
      <articel class="product-article "id=article-${item.id}>
      <h2>${item.name}</h2>
      <div class="article-content-wrapper">
      <div class="article-left-wrapper">
      <a href="../product/product.html?article=${item.id}"><img class="product-img" src=${item.image}></img></a>
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


const getArticles = async () => {
      const response = await fetch('../products.json');
      const data = await response.json();
      products = [...data.products];

      products.forEach(product => {
            let items = product.items;
            items.forEach(item => {
            allItems.push(item);
            console.log(allItems);
            })
            // console.log(product.items);
      })

}
getArticles();


