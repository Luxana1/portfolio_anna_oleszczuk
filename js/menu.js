// menu navigation
function myMenu() {
    var x = document.getElementById("myLinks")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// write the function to disable myFunction on the screen greater than 768px
function myFunction() { 
    if (window.innerWidth > 768) {
        document.getElementById("myLinks").style.display = "none";
    } else {
        document.getElementById("myLinks").style.display = "block";
    }
}

