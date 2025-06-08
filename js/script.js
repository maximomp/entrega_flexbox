document.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo");
  if (!logo) return;
  if (window.scrollY > 50) {
    logo.style.visibility = "hidden"; // Oculta pero mantiene el espacio
  } else {
    logo.style.visibility = "visible"; // Muestra el logo
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");
  if (!menuIcon || !nav) return;

  menuIcon.addEventListener("click", function () {
    // Si está abierto (display: flex), ciérralo; si no, ábrelo
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  });
  // Cierra el menú al hacer clic en cualquier enlace dentro de nav
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      nav.style.display = "none";
    });
  });
});
