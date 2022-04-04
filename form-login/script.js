const form = document.querySelector("form"),
emailField = form.querySelector(".email"),
emailInput = emailField.querySelector("input"),
passField = form.querySelector(".password"),
passInput = passField.querySelector("input");

form.onsubmit = (email)=>{
    email.preventDefault(); //preventing form from submitting
    if(emailInput.value == ""){ //if email is empty
        emailField.classList.add("shake", "error");
    }else{
        checkEmail(); //calling checkEmail function
    }
    if(passInput.value == ""){ //if password is empty
        passField.classList.add("shake", "error");
    }

    setTimeout(()=>{ //remove class after 500ms
        emailField.classList.remove("shake");
        passField.classList.remove("shake");
    }, 500);

    //let's work on input keyup
    emailInput.onkeyup = ()=>{
        checkEmail(); //calling checkEmail function
    }

    //let's create a function
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
        if(!emailInput.value.match(pattern)){
            emailField.classList.add("error");
            let errorTxt = emailField.querySelector(".error-txt");
            (emailInput.value != "") ? errorTxt.innerText = "Enter a vaild email address" : errorTxt.innerText = "Email can't be blank"
        }else{
            emailField.classList.remove("error");
        }
    }

    passInput.onkeyup = ()=>{
        if(passInput.value == ""){ //if password is empty
            passField.classList.add("error");
        }else{
            passField.classList.remove("error");
        }
    }

    //le
    if(!emailField.classList.contains("error") && !passField.classList.contains("error")){
        window.location.href = "#";
        console.log("Form submitted!")
    }
}





