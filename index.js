// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// cerrar el menú al pulsar en cualquier enlace
document.querySelectorAll(".menu li a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
