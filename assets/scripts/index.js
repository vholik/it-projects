// Mobile menu logic
const menuButton = document.querySelector(".burger");
const closeButton = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active-menu");
});

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active-menu");
});
