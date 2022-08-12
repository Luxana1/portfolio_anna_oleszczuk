// form validation script for the form in the contact page (why it doesn't work?)
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var form = document.getElementById("contact-form");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "*Full name is required";
        return false;
    }
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = "*Name must contain only letters";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = "*Email is not valid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateSubject() {
    var subject = document.getElementById("contact-subject").value;

    if (subject.length == 0) {
        subjectError.innerHTML = "*Subject is required";
        return false;
    }
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    var message = document.getElementById("contact-message").value;

    if (message.length == 0) {
        messageError.innerHTML = "*Message is required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateSubmit() {
    if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
        submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    submitError.innerHTML = "*Please fill out all fields";
    submitError.style.display = "block";
    setTimeout(function(){submitError.style.display = "none";}, 3000);
    return false;
}
console.log("script.js loaded");