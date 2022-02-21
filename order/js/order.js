import {activeUser} from "../../js/main.js"

if(activeUser){
    const fieldInputs = document.querySelectorAll('input.input-field');
    fieldInputs.forEach(input =>{
        const variableName = input.id.slice(15);
        input.value = activeUser[variableName]
    })
}