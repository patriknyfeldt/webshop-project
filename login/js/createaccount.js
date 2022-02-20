const errorMessage = document.getElementById("error-message");
console.log(errorMessage);

document.getElementById("createaccount-btn").addEventListener("click", e =>{
    e.preventDefault();
    //get every input fields from form
    const inputFields = Array.from(document.querySelectorAll("form input[type='text'],form input[type='email'], form input[type='password']"));

    let hasEmptyField = false;
    inputFields.forEach(field =>{
        if(field.required && field.validity.valueMissing){
            field.setCustomValidity("Fyll in de tomma fälten med stjärnor(*).")
            printErrorMessage("Fyll in de tomma fälten med stjärnor(*).");
            hasEmptyField = true;
        }
    });

    if(hasEmptyField){
        return;
    }
    else if(document.getElementById("password-field").value !== document.getElementById("verifypassword").value){
        printErrorMessage("Lösenord är inte matchade.")
        return;
    }
    else if(!document.getElementById("checkbox-terms").checked){
        printErrorMessage("Du måste acceptera villkoren.")
        return;
    }
    console.log("create account function");
    const newUser = new Object();

    //from inputfields, get fields that have id with -fields. Then create variables for object from array
    inputFields.filter(e=>e.id.includes("-field")).forEach(field =>{
        const variableName =  field.id.substring(0, field.id.indexOf("-field"));
        newUser[variableName] = field.value;
    })
    let userList = JSON.parse(localStorage.getItem("userList"));
    if(!userList){
        userList = [];
    }

    //cehck if user exists. If true, abort operation. Else add new user to database
    if(userList.find(e=> e.email === newUser.email)){
        printErrorMessage("Det finns en redan existerande användare med den eposten.");
        return;
    }
    else{
        userList.push(newUser);
        localStorage.setItem("userList", JSON.stringify(userList));
        console.log("created account!");
        inputFields.forEach(e=>{
            e.value = "";
        })
        //is error message box still visible
        if(!errorMessage.parentElement.classList.contains("hidden")){
            errorMessage.parentElement.classList.add("hidden");
        }
    }
})

function printErrorMessage(text){
    if(errorMessage.parentElement.classList.contains("hidden")){
        errorMessage.parentElement.classList.remove("hidden");
    }
    errorMessage.innerText = text;
}