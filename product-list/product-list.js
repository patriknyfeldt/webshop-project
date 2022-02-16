
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

const getProducts = async () => {
    const response = await fetch('../products.json');
    const data = await response.json();
    products = [...data.products];
    
    products.forEach(product => {
    if(product.category === qsCategory){
        let items = product.items;
        console.log(items)
        items.forEach(item => {
            console.log(item);
            let h2 = document.createElement('h2');
            h2.innerText = item.name;
            main.appendChild(h2);
        })

    }

    })
                
}
getProducts();