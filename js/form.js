// form validation script for the form in the contact page
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const successMessage = document.getElementById("success-message");

function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "*Full name is required";
        return false;
    }
    if (!name.match(/^[\w'\-,.][^0-9_!¡?%"£^@#$+*÷?¿ˆ*(){}\[\]|~<>;:[\]]{0,}$/)) {
        nameError.innerHTML = "*Name must contain only letters";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = "*Email is not valid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSubject() {
    let subject = document.getElementById("contact-subject").value;

    if (subject.length === 0) {
        subjectError.innerHTML = "*Subject is required";
        return false;
    }
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    let message = document.getElementById("contact-message").value;

    if (message.length === 0) {
        messageError.innerHTML = "*Message is required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSubmit(event) {
    event.preventDefault(); // prevent form submission
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isSubjectValid = validateSubject();
    let isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        document.getElementById("myForm").reset();
        successMessage.innerHTML = "Form submitted successfully";
        setTimeout(function(){successMessage.innerHTML = "";}, 3000);
    } else {
        submitError.innerHTML = "*Please fill out all fields correctly";
        submitError.style.display = "block";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
    }
}

document.getElementById("myForm").addEventListener("submit", validateSubmit);
