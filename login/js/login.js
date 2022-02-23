const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
const errorMessageDisplay = document.getElementById("error-message");

let userList = [];
const userData = JSON.parse(localStorage.getItem("userList"))

if(userData){
    userList = [...userData]
}

document.getElementById("login-button").addEventListener("click", e =>{
    e.preventDefault();
    if(emailField.value === "" || passwordField.value === ""){
        passwordField.value = "";
        printErrorMessage("Fyll in de tomma fälten.");
        return;
    }
    
    if(userExists(emailField.value)){
        const user = getUser(emailField.value);
        if(user.password !== passwordField.value){
            printErrorMessage("Fel lösenord.");
            return;
        }
        localStorage.setItem("user", JSON.stringify(user));
        emailField.value = "";
        passwordField.value = "";
        // location.reload();
        window.location.pathname = ('../index.html');
    }
    else{
        printErrorMessage("Finns ingen användare med den eposten.")
        passwordField.value = "";
    }
})

const getUser = (email) => {
    return userList.find(user => user.email === email);
}

const userExists = (email) =>{
    return userList.find(user => user.email === email)? true : false;
}

function printErrorMessage(text){
    if(errorMessageDisplay.parentElement.classList.contains("hidden")){
        errorMessageDisplay.parentElement.classList.remove("hidden");
    }
    errorMessageDisplay.innerText = text;
}