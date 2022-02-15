const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");

document.getElementById("login-button").addEventListener("click", e =>{
    e.preventDefault();
    if(emailField.value === "" || passwordField.value === ""){
        passwordField.value = "";
        console.log("required fields are empty");
        return;
    }
    const loginInfo = {
        email: emailField.value,
        password: passwordField.value
    }

    localStorage.setItem("user", JSON.stringify(loginInfo));
    emailField.value = "";
    passwordField.value = "";
    console.log(JSON.parse(localStorage.getItem("user")));
})