import { activeUser } from "../../js/main.js";

const inputFields = document.querySelectorAll(".input-field")
const errorMessage = document.getElementById("error-message");

function fillInform(){
    if(activeUser){
        inputFields.forEach(field =>{
            field.value = activeUser[field.id.split("-")[0]];
        })
        
    }
    else{
        console.log("user not logged in");
    }
}

fillInform();

function printErrorMessage(text){
    console.log(errorMessage);
    if(errorMessage.parentElement.classList.contains("hidden")){
        errorMessage.parentElement.classList.remove("hidden");
    }
    errorMessage.innerText = text;
}

document.getElementById("update-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("update")

    if(Array.from(inputFields).some(input => input.required && input.validity.valueMissing)){
        printErrorMessage("Fyll in de tomma fälten med stjärnor(*).");
        return;
    }
    else if(document.getElementById("password-field").value !== document.getElementById("password-verify-field").value){
        printErrorMessage("Lösenord är inte matchade.")
        return;
    }

    inputFields.forEach(field =>{
        const fieldName = field.id.split("-")[0]
        activeUser[fieldName] = field.value;
    })
    localStorage.setItem("user", JSON.stringify(activeUser))
    location.reload();
})

document.getElementById("logout-btn").addEventListener("click", ()=>{
    localStorage.removeItem("user");
    window.location.pathname = ('../index.html');
})