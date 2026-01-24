// Footer dynamic dates
const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastmodified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = menuButton.classList.contains("open");
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
