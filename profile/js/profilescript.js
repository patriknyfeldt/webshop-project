import { activeUser } from "../../js/main.js";

const inputFields = document.querySelectorAll(".input-field")
const errorMessage = document.getElementById("error-message");
const userListData = JSON.parse(localStorage.getItem("userList"));
let userList;

if(userListData){
    userList = userListData;
}


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
    if(errorMessage.parentElement.classList.contains("hidden")){
        errorMessage.parentElement.classList.remove("hidden");
    }
    errorMessage.innerText = text;
}

document.getElementById("update-btn").addEventListener("click", (e)=>{
    e.preventDefault();

    if(Array.from(inputFields).some(input => input.required && input.validity.valueMissing)){
        printErrorMessage("Fyll in de tomma fälten med stjärnor(*).");
        return;
    }
    else if(document.getElementById("password-field").value !== document.getElementById("password-verify-field").value){
        printErrorMessage("Lösenord är inte matchade.")
        return;
    }

    const user = userList.find(u => u.email === activeUser.email);
    
    inputFields.forEach(field =>{
        const fieldName = field.id.split("-")[0]
        user[fieldName] = field.value;
    })
    localStorage.setItem("userList", JSON.stringify(userList));
    localStorage.setItem("user", JSON.stringify(user));
    location.reload();
})

document.querySelectorAll("input[id*='logout-btn']").forEach(input => {
    input.addEventListener("click", ()=>{
        localStorage.removeItem("user");
        window.location.pathname = ('../index.html');
    })
});