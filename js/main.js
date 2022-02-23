let activeUser;

//when page loads, sets active user info to DOM
function userInit(){
    let userData = JSON.parse(localStorage.getItem("user"));
    
    //check if it's an empty object or if we fetched some data
    const userNameDisplay = document.getElementById("user-name");
    const loginBtn = document.getElementById("log-in-link");
    const registerLink = document.getElementById("register-link");
    const logOutBtn = document.getElementById("logout-btn");
    const userRow = loginBtn.parentElement;
    const mobileUserRow = document.getElementById("mobile-user-row");
    const mobileProfileLink = mobileUserRow.querySelector("#mobile-profile-link");

    if(userData){
        //desktop
        activeUser = userData;
        userNameDisplay.classList.remove("hidden");
        logOutBtn.parentElement.classList.remove("hidden");
        registerLink.parentElement.removeChild(registerLink);
        userRow.removeChild(loginBtn);

        // mobile menu
        mobileUserRow.removeChild(mobileUserRow.querySelector("#mobile-login-link"));
        mobileUserRow.removeChild(mobileUserRow.querySelector("#mobile-register-link"));
        
        userNameDisplay.querySelector("a").innerText = activeUser.forename;
        mobileProfileLink.innerText = activeUser.forename;
        
    }
    else{
        //desktop
        userNameDisplay.parentElement.removeChild(userNameDisplay);
        loginBtn.classList.remove("hidden");
        userRow.removeChild(logOutBtn.parentElement);

        //mobile menu
        mobileUserRow.removeChild(mobileProfileLink);
        mobileUserRow.removeChild(mobileUserRow.querySelector("#mobile-logout-btn"));

    }
}


document.getElementById("logout-btn").addEventListener("click", logOutUser);
document.getElementById("mobile-logout-btn").addEventListener("click", logOutUser);

function logOutUser(){
    localStorage.removeItem("user");
    window.location.pathname = ('../index.html');
}

userInit();
export {activeUser};