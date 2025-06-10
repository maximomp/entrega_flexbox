// Functions

// To toggle the visibility of the header based on scroll position and window width
const headerControl = () => {
  const logo = document.querySelector(".logo");
  if (!logo) return;
  // check if the width is less than 1024px
  if (window.innerWidth < 1024) {
    let header = document.querySelector(".header");
    header.classList.remove("header-fixed");

    if (window.scrollY > 50) {
      logo.style.visibility = "hidden"; // Hide but keep the space
    } else {
      logo.style.visibility = "visible"; // Show the logo
    }
  } else {
    // select header class item by class name
    let header = document.querySelector(".header");
    if (!header) return;
    if (window.scrollY > 50) {
      // add the header-fixed class
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  }
};

// control the menu mobile menu visibility and functionality
const openCloseMenu = () => {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");
  if (!menuIcon || !nav) return;

  menuIcon.addEventListener("click", function () {
    // If open (top: 0), close it; if not, open it
    if (nav.style.top == "0px") {
      //   nav.style.display = "none";
      nav.style.top = "-100vh"; // Optionally reset the menu position
    } else {
      //   nav.style.display = "flex";
      nav.style.top = "0"; // Make sure the menu is fully visible
    }
  });
  // Close the menu when clicking any link inside nav
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      nav.style.top = "-100vh"; // Close the menu when a link is clicked
    });
  });
};

// EVENT LISTENERS
// Add scroll and resize event listeners to control the header visibility
document.addEventListener("scroll", headerControl);
window.addEventListener("resize", headerControl);

// control the menu mobile menu visibility and functionality
document.addEventListener("DOMContentLoaded", openCloseMenu);
