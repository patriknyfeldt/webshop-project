import {activeUser} from "../../js/main.js"

const errorMessageDisplay = document.getElementById("error-message");
const productListData = JSON.parse(localStorage.getItem("basket"));
const descriptionGrp = document.getElementById("order-description-grp");

let productList;

if(productListData){
    productList = productListData;
}

function fillUserFormData(user){
    if(user){
        const fieldInputs = [...document.querySelectorAll('input.input-field')];
        fieldInputs.forEach(input =>{
            const variableName = input.id.slice(15);
            if(user.hasOwnProperty(variableName)){
                input.value = user[variableName];
            }
        })
    }
}

function printErrorMessage(text){
    if(errorMessageDisplay.parentElement.classList.contains("hidden")){
        errorMessageDisplay.parentElement.classList.remove("hidden");
    }
    errorMessageDisplay.innerText = text;
}

const drawProduct = (item) =>{
    const article = item.article
    return `<div>
        <article>
            <img src="${article.image}" width="200px" height="150px">
            <h2>${article.name}</h2>
            <p>${article.description}</p>
            <p>Price: ${article.price}</p>
        </article>
    </div>`
}

const drawReceiptUser = (item) =>`
    <div>
        <p><b>${item.dataset.name}</b></p>
        <p>${item.value}</p>
    </div>`


// function renderProductDescriptions(){
//     document.getElementById("product-list-descriptions").innerHTML = productList.map(drawProduct).join("");
//     // productList.innerHTML = items.map(drawProduct).join(''); 

// }

function renderListToElement(element, list, drawFunction){
    element.innerHTML = list.map(drawFunction).join("");
}

document.getElementById("send-order-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    const inputFields = Array.from(document.querySelectorAll("form#order-form [id*='input']"));

    if(inputFields.some(input => input.required && input.validity.valueMissing)){
        printErrorMessage("Fyll in de tomma fälten med stjärnor(*).");
        console.log("emtpy field");
        return;
    }

    descriptionGrp.parentElement.removeChild(descriptionGrp);

    const receiptWrapper = document.getElementById("receipt-wrapper");
    receiptWrapper.classList.remove("hidden");
    receiptWrapper.innerHTML += `
        <div>
            <h1>Tack för din beställning!</h1>
            <p>Kolla din mejl för order bekräftelse</p>
        </div>
        <div id="receipt-product-summary"></div>
        <div id="receipt-user-summary"></div>
    `
    renderListToElement(document.getElementById("receipt-user-summary"), inputFields, drawReceiptUser);
    renderListToElement(document.getElementById("receipt-product-summary"), productList, drawProduct)
    
})

fillUserFormData(activeUser);
renderListToElement(document.getElementById("product-list-descriptions"), productList, drawProduct)