let form = document.getElementById("login");
let formControls = document.querySelectorAll(".form-control");

function isValidEmail(email){
    if (email=="" || email.length < 8){
        return false
    }
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    return pattern.test(email)
}

function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId)
    errorElement.innerText = message
}

function resetearErrores(){
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    })
}

function validForm() {

    resetearErrores();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValidLogin = true;

        if (!isValidEmail(email)){
            displayErrorMessage("erroremail", "El formato del email no es válido")
            document.getElementById("email").classList.add("is-invalid")
            isValidLogin = false;
        }
        else{
            document.getElementById("email").classList.remove("is-invalid")
            document.getElementById("email").classList.add("is-valid")
        }

        if (password=="" || password.length < 4){
            displayErrorMessage("errorpassword", "La constraseña debe tener al menos 4 caracteres")
            document.getElementById("password").classList.add("is-invalid")
            isValidLogin = false;
        }
        else{
            document.getElementById("password").classList.remove("is-invalid")
            document.getElementById("password").classList.add("is-valid")
        }

        if (isValidLogin){
            alert("Acceso exitoso")
            window.location.href = '/';
        }
}

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validForm();
    });

    formControls.forEach((input)=> {
        input.addEventListener("keydown", (event) => {
            if(event.key === "Tab" || event.key === "Enter"){
                validForm(submit=false);
            }
        })
    })
})

