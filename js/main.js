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


document.querySelectorAll("input[id*='logout-btn']").forEach(input => {
    input.addEventListener("click", ()=>{
        localStorage.removeItem("user");
        window.location.pathname = ('../index.html');
    })
});

userInit();
export {activeUser};



// Add / remove number of Products to Cart Icon ( KEEPS SCORE ON ALL PAGES. Code is added for functionality to each relevant eventlistener on all seperate pages )

function cartIconCount() {
    let savedProductList = JSON.parse(localStorage.getItem("basket"));
    if(!savedProductList){
        savedProductList = [];
        localStorage.setItem("basket", JSON.stringify(savedProductList))

    }
    savedProductList.forEach(quantity => {
        let cartIcon = document.querySelectorAll('.cart');
        cartIcon.forEach(cartIcon => {
        let cartCircle = Number(cartIcon.getAttribute('data-count'));
        cartCircle = savedProductList.reduce((count, item) => count += item.quantity, 0);
        cartIcon.setAttribute('data-count', cartCircle);
        })
    });
}
cartIconCount();