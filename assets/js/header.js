document.addEventListener("DOMContentLoaded", () => {
    let main = document.querySelector("body");
    let header = document.querySelector("header");
    let logoDiv = document.querySelector(".header-logo");
    let logoImage = document.querySelector(".header-logo-img");
    let logoText = document.querySelector(".logo-text");
    let burgerButton = document.querySelector(".burger-menu");
    let headerMenu = document.querySelector(".header-menu-list");
    let headerCopyright = document.querySelector(".header-copyright");

    let closeButton = createCloseButton();
    let darkBlock = createDarkBlock();

    burgerButton.addEventListener("click", openBurger);

    function createCloseButton() {
        let button = document.createElement("div");
        button.classList.add("header-menu-close-btn");

        button.addEventListener("click", closeBurger);
        return button;
    }

    function createDarkBlock() {
        let darkBlock = document.createElement("div");
        darkBlock.classList.add("dark-block");

        darkBlock.addEventListener("click", closeBurger);
        return darkBlock;
    }

    function openBurger() {
        header.classList.add("header-opened");
        burgerButton.classList.add("burger-opened");
        headerMenu.classList.add("header-menu-opened");
        logoDiv.classList.add("logo-opened");
        logoText.classList.add("logo-text-opened");
        logoImage.classList.add("logo-img-opened");
        headerCopyright.classList.add("header-copyright-opened");

        logoDiv.appendChild(closeButton);
        main.appendChild(darkBlock);
    }

    function closeBurger() {
        header.classList.remove("header-opened");
        burgerButton.classList.remove("burger-opened");
        headerMenu.classList.remove("header-menu-opened");
        logoDiv.classList.remove("logo-opened");
        logoText.classList.remove("logo-text-opened");
        logoImage.classList.remove("logo-img-opened");
        headerCopyright.classList.remove("header-copyright-opened");

        logoDiv.removeChild(closeButton);
        main.removeChild(darkBlock);
    }

});