const productList = document.getElementById('product-list');
let products = [];



const getProducts = async () => {
    const response = await fetch('/products.json');
    const data = await response.json();
    products = [...data.products];
   console.log(products[0]["female"])
}
getProducts();