// menu navigation dropdown
function myMenu() {
    const x = document.getElementById("myLinks");
    const icon = document.querySelector(".icon i");
    
    x.classList.toggle("show-menu");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
}

// disable menu navigation dropdown on screens larger than 576px
function myMenu() {
  if (window.innerWidth <= 576) {
    const x = document.getElementById("myLinks");
    const icon = document.querySelector(".icon i");

    x.classList.toggle("show-menu");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
  }
}

// Highlight the active link in the navigation bar
function highlightActiveLink() {
  const currentPage = window.location.href;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    if (link.href === currentPage) {
      link.classList.add('active-link');
      link.parentNode.classList.add('no-hover'); // Disable hover effect on active link
    } else {
      link.classList.remove('active-link');
      link.parentNode.classList.remove('no-hover'); // Re-enable hover effect on non-active links
    }
  });
}

function highlightPortfolioContact(event) {
  const navLinks = document.querySelectorAll('.nav-link');
  const clickedLink = event.target;

  if (clickedLink.hash === '#portfolio' || clickedLink.hash === '#contact') {
    navLinks.forEach((link) => {
      link.classList.remove('active-link');
      link.parentNode.classList.remove('no-hover'); // Re-enable hover effect
    });

    clickedLink.classList.add('active-link');
    clickedLink.parentNode.classList.add('no-hover'); // Disable hover effect
  }
}

// Call the highlightActiveLink function on page load
highlightActiveLink();

// Attach the highlightPortfolioContact function to each menu item
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', highlightPortfolioContact);
});



