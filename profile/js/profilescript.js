import { activeUser } from "../../js/main.js";

const inputFields = document.querySelectorAll(".input-field")


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

document.getElementById("update-btn").addEventListener("click", (e)=>{
    console.log("update")
    e.preventDefault();
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