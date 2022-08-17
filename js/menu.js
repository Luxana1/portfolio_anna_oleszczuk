// menu navigation
function myMenu() {
    var x = document.getElementById("myLinks")
    if (window.innerWidth < 768) {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}
// when the screen is greater than 768px, remove display:mone from the menu
window.addEventListener("resize", myMenu);
    var x = document.getElementById("myLinks")
    if (window.innerWidth >= 768) {
        x.style.display = "block";
    } else {
        (window.innerWidth < 768)
        x.style.display = "none";
    }

// not sure how to make only the div to be displayed on the screen greater than 768px