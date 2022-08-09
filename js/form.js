// form validation script for the form in the contact page (why it doesn't work?)
function validate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (firstMane.length < 2) {
        text = "Please enter your first name.";
        error_message.innerHTML = text;
        return false;
    }
    if (lastName.length < 2) {
        text = "Please enter your last name.";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter a valid email address.";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 2) {
        text = "Please enter a subject.";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length < 2) {
        text = "Please enter a message.";
        error_message.innerHTML = text;
        return false;
    }
    alert("Thank you for contacting me. I will get back to you as soon as possible.");
    return true;
}

