import {activeUser} from "../../js/main.js"

const errorMessageDisplay = document.getElementById("error-message");

if(activeUser){
    const fieldInputs = [...document.querySelectorAll('input.input-field')];
    fieldInputs.forEach(input =>{
        const variableName = input.id.slice(15);
        if(activeUser.hasOwnProperty(variableName)){
            input.value = activeUser[variableName];
        }
    })
}

document.getElementById("send-order-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    const inputFields = Array.from(document.querySelectorAll(".input-field[required]"));
    console.log(inputFields)

    if(inputFields.some(input => input.required && input.validity.valueMissing)){
        printErrorMessage("Fyll in de tomma fälten med stjärnor(*).");
        console.log("emtpy field");
    }
   
})


function printErrorMessage(text){
    if(errorMessageDisplay.parentElement.classList.contains("hidden")){
        errorMessageDisplay.parentElement.classList.remove("hidden");
    }
    errorMessageDisplay.innerText = text;
}