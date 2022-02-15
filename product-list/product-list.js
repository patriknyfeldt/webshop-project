const productList = document.getElementById('product-list');
let categories = [];



const getProducts = async () => {
    const response = await fetch('/products.json');
    const data = await response.json();
    products = [...data.products];
   
}
getProducts();