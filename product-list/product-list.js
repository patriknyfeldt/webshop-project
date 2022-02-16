const main = document.getElementById('productlist-main');
let products = [];




const getProducts = async () => {
    const response = await fetch('/products.json');
    const data = await response.json();
    products = [...data.products];

    products.forEach(product => {
        let category = product.category;
        let items = product.items;
        
       items.forEach(item =>{
           console.log(item)

           main.innerHTML = 
           `<h1>${category}</h1>`
       })
    })
   
}
getProducts();