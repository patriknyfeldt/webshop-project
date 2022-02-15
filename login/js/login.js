const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
const activeUserDisplay = document.getElementById("active-user-display");
let activeUser = JSON.parse(localStorage.getItem("user"));

let userList = [];
const userData = JSON.parse(localStorage.getItem("userList"))

if(userData){
    userList = [...userData]
}

if(activeUser){
    activeUserDisplay.innerText = `Welcome ${activeUser.email}!`;
}

console.log(userList);

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

    
    if(isExistingUser(loginInfo)){
        localStorage.setItem("user", JSON.stringify(loginInfo));
        activeUser = loginInfo;
        activeUserDisplay.innerText = `Welcome ${activeUser.email}!`;
        emailField.value = "";
        passwordField.value = "";
    }
    else{
        activeUserDisplay.innerText = `User doesn't exist`;
        passwordField.value = "";
    }
})

const isExistingUser = (loginDetail) => {
    console.log(`loginDetail: ${loginDetail.email} ${loginDetail.password}`);
    let flag = false;
    userList.forEach(user =>{
        console.log(`user: ${user.email} ${user.password}`);
        if(user.email === loginDetail.email && user.password === loginDetail.password){
            console.log("found user!");
            flag = true;
        }
    })
    return flag;
}