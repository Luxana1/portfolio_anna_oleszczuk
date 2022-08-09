// menu navigation
function myMenu() {
    var x = document.getElementById("myLinks")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// function that disable myMenu on the screen greater than 768px
function myMenu() { 
    if (window.innerWidth > 768) {
        document.getElementById("myLinks").style.display = "none";
    } else {
        document.getElementById("myLinks").style.display = "block";
    }
}

//disable the onclick event on the <a> element with the id="myLinks" on the screen greater than 768px
function myMenu() {
    if (window.innerWidth > 768) {
        document.getElementById("myLinks").onclick = function() {
            return false;
        }
    } else {
        document.getElementById("myLinks").onclick = function() {
            return true;
        }
    }
}

// not sure how to make only the div to be displayed on the screen greater than 768px