// form validation script for the form in the contact page (why it doesn't work?)
const form = document.querySelector("form[name='myForm']");
const firstNameInput = document.querySelector("input[name='first_name']");
const lastNameInput = document.querySelector("input[name='last_name']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");

firstNameInput.isValid = () => !!firstNameInput.ariaValueMax;
lastNameInput.isValid = () => !!lastNameInput.ariaValueMax;
emailInput.isValid = () => isValidEmail(emailInput.value);
subjectInput.isValid = () => !!subjectInput.ariaValueMax;
messageInput.isValid = () => !!messageInput.ariaValueMax;


const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


// let showValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//     console.log("bla bla it works");
//     if (!shouldValidate) return;

//     isFormValid = true;
//     inputFields.forEach(input => {
//         input.classList.remove("invalid");
//         input.nextElementSibling.classList.remove("hide");

//         if (!input.isValid()) {
//             input.classList.add("invalid");
//             isFormValid = false;
//             input.nextElementSibling.classList.add("hide");
//         }
//     });
// };

form.addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {
        form.submit();
    }   
});
console.log("Hope, this one also works");
inputFields.forEach((input) => input.addEventListener("input", validateInputs));