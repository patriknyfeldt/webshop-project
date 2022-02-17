const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
const activeUserDisplay = document.getElementById("active-user-display");

let userList = [];
const userData = JSON.parse(localStorage.getItem("userList"))

if(userData){
    userList = [...userData]
}

document.getElementById("login-button").addEventListener("click", e =>{
    e.preventDefault();
    if(emailField.value === "" || passwordField.value === ""){
        passwordField.value = "";
        console.log("required fields are empty");
        return;
    }
    
    if(userExists(emailField.value)){
        localStorage.setItem("user", JSON.stringify(getUser(emailField.value)));
        emailField.value = "";
        passwordField.value = "";
        location.reload();
    }
    else{
        activeUserDisplay.innerText = `User doesn't exist`;
        passwordField.value = "";
    }
})

const getUser = (email) => {
    return userList.find(user =>{
        if(user.email === email){
            console.log("found user! ");
            return user;
        }
    })
}

const userExists = (email) =>{
    return userList.find(user => user.email === email)? true : false;
}