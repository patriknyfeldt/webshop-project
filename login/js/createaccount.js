document.getElementById("createaccount-btn").addEventListener("click", (e)=>{
    e.preventDefault();
    //get every input fields from form
    const inputFields = Array.from(document.querySelectorAll("form input[type='text'],form input[type='email'], form input[type='password']"));
    if(inputFields.find(e=> e.value === "")){
        console.log("Field is empty");
        return;
    }
    else if(document.getElementById("password-field").value !== document.getElementById("verifypassword").value){
        console.log("Passwords doesn't match");
        return;
    }
    else if(!document.getElementById("checkbox-terms").checked){
        console.log("You must accept the terms.");
        return;
    }
    console.log("create account function");
    const newUser = new Object();

    //from inputfields, get fields that have id with -fields. Then create variables for object from array
    inputFields.filter(e=>e.id.includes("-field")).forEach(field =>{
        const variableName =  field.id.substring(0, field.id.indexOf("-field"));
        newUser[variableName] = field.value;
        console.log(newUser[variableName]);
    })
    const userList = JSON.parse(localStorage.getItem("userList"));

    //cehck if user exists. If true, abort operation. Else add new user to database
    if(userList.find(e=> e.email === newUser.email)){
        console.log("User already exists.")
        return;
    }
    else{
        userList.push(newUser);
        localStorage.setItem("userList", JSON.stringify(userList));
        console.log("created account!");
        inputFields.forEach(e=>{
            e.value = "";
        })
    }
})