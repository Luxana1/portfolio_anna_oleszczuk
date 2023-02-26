// typing effect for the hero text
const messageArray = ["My Name is Anna Oleszczuk. <br> I am a Web Developer."];
let textPosition = 0;
const speed = 150;

const message = () => {
  document.querySelector("#text").innerHTML = messageArray[0].substring(0, textPosition);

  if (textPosition++ != messageArray[0].length) {
    setTimeout(message, speed); 
  } else {
    // stop color change when typing effect is finished
    clearInterval(colorInterval);
  }
}

window.addEventListener("load", message);

const colorChange = () => {   
  const text = document.querySelector("#text");
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  text.style.color = "#" + randomColor;
}

// call colorChange every 200ms
const colorInterval = setInterval(colorChange, 200);





