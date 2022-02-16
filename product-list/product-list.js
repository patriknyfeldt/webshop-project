
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
const main = document.getElementById('productlist-main');
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
    `<li>
    <h2>${item.name}</h2>
    <img src=${item.image}></img>
    <p>Description: ${item.description}<p/>
    <p>Price: ${item.price}<p/>
    </li>`;


const getProducts = async () => {
    const response = await fetch('../products.json');
    const data = await response.json();
    products = [...data.products];
    
    products.forEach(product => {
    if(product.category === qsCategory){
        let items = product.items;
        console.log(items)
            main.innerHTML = items.map(drawProduct).join('');


//        list.innerHTML = productsObj.map(drawArticle).join('');


            // console.log(item);
            // let h2 = document.createElement('h2');
            // h2.innerText = item.name;
            // main.appendChild(h2);

    }

    })
                
}
getProducts();