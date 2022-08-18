// typing effect for the hero text
var messageArray = ["My Name is Anna Oleszczuk. " + "<br>" + "I am a Web Developer."];
var textPosition = 0;
var speed = 150;
var randomColor = Math.floor(Math.random()*16777215).toString(16);

// typing effect for the hero text 

message = () => {
    document.querySelector("#text").innerHTML = messageArray[0].substring(0, textPosition);

    if(textPosition++ != messageArray[0].length)
        setTimeout(message, speed); 
}
window.addEventListener("load", message);

// color change for the each character of hero text while the message is typing

var colorChange = () => {   
    var text = document.querySelector("#text");
    text.style.color = "#" + randomColor;
    randomColor = Math.floor(Math.random()*16777215).toString(16);
}
setInterval(colorChange, speed);





