const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
