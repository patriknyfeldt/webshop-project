document.getElementById("createaccount-btn").addEventListener("click", ()=>{
    console.log("create account function");
    const inputFields = document.querySelectorAll("form#createaccount-form input[id*='field']");
    console.log(inputFields);
})