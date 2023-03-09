// // menu navigation
// function myMenu() {
//     var x = document.getElementById("myLinks")
//     if (window.innerWidth < 768) {
//         if (x.style.display === "block") {
//             x.style.display = "none";
//         } else {
//             x.style.display = "block";
//         }
//     }
// }
// menu navigation
function myMenu() {
    const x = document.getElementById("myLinks");
    const icon = document.querySelector(".icon i");
    
    if (window.innerWidth < 768) {
      if (x.style.display === "block") {
        // close the menu with a fade out animation
        x.style.animation = "fadeOut 0.5s";
        setTimeout(() => x.style.display = "none", 500);
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      } else {
        // open the menu with a fade in animation
        x.style.animation = "fadeIn 0.5s";
        x.style.display = "block";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      }
    } else {
      x.style.display = "block";
    }
  }
  

// when the screen is greater than 768px, remove display:mone from the menu
window.addEventListener("resize", myMenu);
    const x = document.getElementById("myLinks")
    if (window.innerWidth >= 768) {
        x.style.display = "block";
    } else {
        (window.innerWidth < 768)
        x.style.display = "none";
    }
