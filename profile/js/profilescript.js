import { activeUser } from "../../js/main.js";

const inputFields = document.querySelectorAll(".input-field")

document.getElementById("update-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("update");
})

function fillInform(){
    console.log(inputFields);
}

fillInform();