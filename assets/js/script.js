document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menu-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("menu-open");
    });
});