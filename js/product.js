
const productContainer = document.querySelector('product-info');
// Variable name examples: productItem, info , (content), (item)
let content = [];

const renderProduct = (item) => {
productContainer.innerHTML = `
      <div class="flex-container" id="${item.id}">
            <div class="image-wrapper">
            <img class="image" src="${item.image}">
            </div>
      <div class="info-wrapper">
            <h2>${item.name}</h2>
                  <p>Description: ${item.description}<p/>
                  <p>Price: ${item.price}<p/>
      <button id="add-btn-${item.id}">Lägg till i varukorg</button>
            </div>
      </div>`;
}
console.log(renderProduct(item));