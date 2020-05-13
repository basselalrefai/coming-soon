// Global Variables

const button = document.querySelector(".form-button-main");
const input = document.querySelector(".form-email");
const errorIcon = document.querySelector(".form-error-icon");
const errorMessage = document.querySelector(".error-message");
console.log(errorIcon)

// show error message
button.addEventListener("click", function() {
    if (input.validity.typeMismatch) {
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
        input.setCustomValidity(' ');
    }
})
