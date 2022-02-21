import {activeUser} from "../../js/main.js"

if(activeUser){
    const fieldInputs = [...document.querySelectorAll('input.input-field')];
    fieldInputs.forEach(input =>{
        console.log(input)
        const variableName = input.id.slice(15);
        if(activeUser.hasOwnProperty(variableName)){
            input.value = activeUser[variableName];
        }
    })
}

document.getElementById("")