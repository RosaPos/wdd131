const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) year.textContent = new Date().getFullYear();
if (lastModified) lastModified.textContent = document.lastModified;

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#primary-nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });
}