
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
const productList = document.getElementById('product-list');
let products = [];

// const listProducts = (prodList) => {
//     prodList.forEach(prod => {
//         if(prod.category === qsCategory){
//             main.innerHTML = `<article>
//             <h2>${prod.name}</h2></article>`
//         }
//     })
// }

const drawProduct = (item) => 
    `<articel id=${item.id}>
    <h2>${item.name}</h2>
    <a><img src=${item.image}></img></a>
    <p>Description: ${item.description}<p/>
    <p>Price: ${item.price}<p/>
    <button id="add-btn-${item.id}">lägg till i varukorgen</button>
    </article>`;


const getProducts = async () => {
    const response = await fetch('../products.json');
    const data = await response.json();
    products = [...data.products];
    
    products.forEach(product => {
    if(product.category === qsCategory){
        let items = product.items;
            productList.innerHTML = items.map(drawProduct).join('');
        console.log(productList.innerHTML);

//        list.innerHTML = productsObj.map(drawArticle).join('');


            // console.log(item);
            // let h2 = document.createElement('h2');
            // h2.innerText = item.name;
            // main.appendChild(h2);

    }

    })
                
}
getProducts();