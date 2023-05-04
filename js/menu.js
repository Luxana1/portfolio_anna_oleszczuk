// menu navigation dropdown
function myMenu() {
    const x = document.getElementById("myLinks");
    const icon = document.querySelector(".icon i");
    
    x.classList.toggle("show-menu");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
  }
  
// disable menu navigation dropdown
function myMenu() {
  if (window.innerWidth <= 576) {
    const x = document.getElementById("myLinks");
    const icon = document.querySelector(".icon i");

    x.classList.toggle("show-menu");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
  }
}

