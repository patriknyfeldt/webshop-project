const productList = document.getElementById('product-list');
let products = [];



const getProducts = async () => {
    const response = await fetch('/products.json');
    const data = await response.json();
    products = [...data.products];
<<<<<<< HEAD
   console.log(products[0]["female"])
=======
    console.log(products);
   
>>>>>>> 3d7aae7defee8a95352487c2ca6ef364fb1866f4
}
getProducts();