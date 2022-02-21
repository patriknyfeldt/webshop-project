const addToShoppingCart = () => {
   
    // Behövs här eller i shopping-cart.js?
    shoppingCart = document.getElementById("shopping-cart-list");
    
    buttons.forEach(button => {
        
        button.addEventListener('click', (e) => {
            let productID = e.target.id.slice(7);
            
            const chosenProduct = listedProducts.find(product => product.id === productID);
           
            
            /* console.log(chosenProduct); */

            let articlesForChartObject = JSON.parse(localStorage.getItem("basket"));
            let articlesForChart = [];
            if(articlesForChartObject){
                articlesForChart = articlesForChartObject.list;
            }

            const existingProduct = articlesForChart.find(a => a.article.id === chosenProduct.id)
            if(existingProduct){
                existingProduct.quantity++
            }
            else if(!existingProduct){
                const articleObj = {
                    quantity: 1,
                    article: chosenProduct
                }
                articlesForChart.push(articleObj);
            }


                const basketList = {
                list: articlesForChart
            }
            
            localStorage.setItem("basket", JSON.stringify(basketList));
            
            
        })

    }) 

}