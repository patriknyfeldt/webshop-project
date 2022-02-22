let activeUser;

//when page loads, sets active user info to DOM
function userInit(){
    let userData = JSON.parse(localStorage.getItem("user"));
    
    //check if it's an empty object or if we fetched some data
    const userNameDisplay = document.getElementById("user-name");
    const loginBtn = document.getElementById("log-in-link");
    console.log(userNameDisplay)
    console.log(loginBtn);
    if(userData){
        console.log("true");
        activeUser = userData;
        if(userNameDisplay){
            userNameDisplay.classList.remove("hidden");
            userNameDisplay.querySelector("a").innerText = activeUser.forename;

        }
        if(loginBtn){
            loginBtn.parentElement.removeChild(loginBtn);
        }
    }
    else{
        console.log("false")
        userNameDisplay.parentElement.removeChild(userNameDisplay);
        loginBtn.classList.remove("hidden");
    }
}

userInit();

export {activeUser};