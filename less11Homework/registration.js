function firstNameValidator() {
    
    const firstNameValidationRegEx = /^[A-Za-z]{3,15}$/ig;

    let firstNameRes = document.getElementById("firstNameRes")
  
    if (!firstName.match(firstNameValidationRegEx)) {
        firstNameRes.style.color = "red";
        firstNameRes.innerHTML = "Incorrect Format";
    } else {
        firstNameRes.innerHTML = "";
    }

    
}

function lastnameValidator() {
    let lastname = document.getElementById("lastname").value;
    const lastnameValidator = /^[A-Za-z]{3,25}$/ig;
    let lastnameRes = document.getElementById("lastnameRes");

    if (!lastname.match(lastnameValidator)) {
        lastnameRes.style.color = "red";
        lastnameRes.innerHTML = "Incorrect Format";
    } else {
        lastnameRes.innerHTML = "";
    }
}
let firstName = document.getElementById("firstName").value;
let lastname = document.getElementById("lastname").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
const firstNameValidationRegEx = /^[A-Za-z]{3,15}$/ig;
const lastnameValidator = /^[A-Za-z]{3,25}$/ig;
const emailValidator=/^[a-zA-Z0-9_]{3,32}/ig;
const passwordValidator=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/ig;
let button=document.getElementById("submit");
let button2=document.getElementById("login");
button2.style.display="none"

button.addEventListener("click", (event)=>{
    if(firstName.match(firstNameValidationRegEx) && lastname.match(lastnameValidator)&& email.match(emailValidator) && password.match(passwordValidator)){
        button2.style.display="inline-block"
    }

})