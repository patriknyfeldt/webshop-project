let activeUser;

//when page loads, sets active user info to DOM
function userInit(){
    userData = JSON.parse(localStorage.getItem("user"));
    
    //check if it's an empty object or if we fetched some data
    if(userData){
        activeUser = userData;
        const userNameDisplay = document.getElementById("user-name");
        const loginDisplay = document.getElementById("log-in-link");
        if(userNameDisplay){
            userNameDisplay.classList.remove("hidden");
            userNameDisplay.innerText = activeUser.forename;

        }
        if(loginDisplay){
            loginDisplay.classList.add("hidden");
        }
    }
}

userInit();