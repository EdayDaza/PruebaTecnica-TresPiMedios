const header = document.querySelector("header");
const menuToggle = document.querySelector(".menuToggle");
const navbarMenu = document.querySelector(".navbar__menu");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const handleClick = () => {
    menuToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
};