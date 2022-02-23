import {activeUser} from "../../js/main.js"

const errorMessageDisplay = document.getElementById("error-message");
const productListData = JSON.parse(localStorage.getItem("basket"));
const descriptionGrp = document.getElementById("order-description-grp");
const cardInputField = document.getElementById("input-customer-card");

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
    const quantity = item.quantity
    return `<div class="article-wrapper">
                <article class="article">
                    <img class="article-img" src="${article.image}" width="200px" height="150px">
                    <div class="article-info-wrapper">
                    <h3>${article.name}</h3>
                    <p>${article.description}</p>
                    <p>Pris: ${article.price}</p>
                    <p>Antal: ${quantity}</p>
                    </div>
                </article>
            </div>`
}

//
const drawReceiptUser = (item) =>`
    <div class="user-info">
        <p><b>${item.labelName}</b></p>
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
        return;
    }

    descriptionGrp.parentElement.removeChild(descriptionGrp);

    const receiptWrapper = document.getElementById("receipt-wrapper");
    const pageHeading =  document.getElementById("h1");
    pageHeading.innerText = "Tack för din beställning!";
    receiptWrapper.innerHTML += `
    <div class="summary-wrapper">
            <h2>Summering</h2>
            <div class="product-list-descriptions">
                <div id="receipt-product-summary"></div>
            </div>
        </div>
        <div class="user-info-wrapper">
            <h2>Dina uppgifter</h2>
            <div id="receipt-user-summary"></div>
        </div>
    `
    const inputFieldsNameValues = inputFields.map(input => {
        let fieldName = input.previousElementSibling.innerText;
        fieldName = fieldName.includes("*") ? fieldName.slice(0, fieldName.length-1) : fieldName;
        return {labelName: fieldName, value:input.value}
    })
    document.getElementById("receipt-total-price-display").innerText = "Total: " +  productList.reduce((total, p) => total += p.article.price * p.quantity, 0);
    renderListToElement(document.getElementById("receipt-user-summary"), inputFieldsNameValues, drawReceiptUser);
    renderListToElement(document.getElementById("receipt-product-summary"), productList, drawProduct);
    localStorage.setItem("basket", JSON.stringify([]))
    
})

fillUserFormData(activeUser);
renderListToElement(document.getElementById("product-list-descriptions"), productList, drawProduct)
document.getElementById("total-price-display").innerText = "Total: " +  productList.reduce((total, p) => total += p.article.price * p.quantity, 0);

cardInputField.addEventListener("input", ()=>{

    //remove dashes
    
    let cardValue = cardInputField.value.split("-").join("");
    if(cardValue.length > 16){
        cardValue = cardValue.slice(0, cardValue.length-1);
        calculateCardField();
        return;
    }

    // add dashes
    function calculateCardField(){
        const textArray = [];
        for(let i = 0; i < cardValue.length; i+=4){
            textArray.push(`${cardValue.slice(i, i+4)}`);
        }
        cardInputField.value = textArray.join("-");
    }
    calculateCardField();
})
