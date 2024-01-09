let threeBars = document.querySelector(".header-three-bars");
let cross = document.querySelector(".header-cross");
let logo = document.querySelector(".header-logo");
let logo_title = document.querySelector(".header-logo-title");
let menu = document.querySelector(".header-menu");
let menu_items = document.querySelectorAll(".header-menu-item");
let link = document.querySelector(".header-link");
let link_tel = document.querySelector(".header-link-tel");
let link_tel_numbers = document.querySelectorAll(".header-link-tel-number");
let link_email = document.querySelector(".header-link-email");
let link_email_address = document.querySelector(".header-link-email-address");
let link_image = document.querySelector(".header-link-image");
let link_image_second = document.querySelector(".header-link-image-second");
let header = document.querySelector(".header");

cross.addEventListener("click", function () {
    onMenuClick("nope");
});
threeBars.addEventListener("click", function () {
    onMenuClick("yes");
});
function onMenuClick(needToOpen) {
    if (needToOpen == "yes")
    {
        header.classList.add("header-open");
        header.classList.remove("header-close");
        threeBars.classList.add("header-open-element-three-bars");
        threeBars.classList.remove("header-close-element-three-bars");
        cross.classList.add("header-open-element-cross");
        cross.classList.remove("header-close-element-cross");

        logo.classList.add("header-open-element-logo");
        logo.classList.remove("header-close-element-logo");
        logo_title.classList.add("header-open-element-logo-title");
        logo_title.classList.remove("header-close-element-logo-title");

        menu.classList.add("header-open-element-menu");
        menu.classList.remove("header-close-element-menu");
        menu_items.forEach(function (item) {
            item.classList.add("header-open-element-menu-item");
        });
        menu_items.forEach(function (item) {
            item.classList.remove("header-close-element-menu-item");
        });

        link.classList.add("header-open-element-link");
        link.classList.remove("header-close-element-link");
        link_tel.classList.add("header-open-element-link-tel");
        link_tel.classList.remove("header-close-element-link-tel");
        link_tel_numbers.forEach(function (item) {
            item.classList.add("header-open-element-link-tel-number");
        });
        link_tel_numbers.forEach(function (item) {
            item.classList.remove("header-close-element-link-tel-number");
        });

        link_email.classList.add("header-open-element-link-email");
        link_email.classList.remove("header-close-element-link-email");
        link_email_address.classList.add("header-open-element-link-email-address");
        link_email_address.classList.remove("header-close-element-link-email-address");

        link_image.classList.add("header-open-element-link-image");
        link_image.classList.remove("header-close-element-link-image");
        link_image_second.classList.add("header-open-element-link-image-second");
        link_image_second.classList.remove("header-close-element-link-image-second");


        console.log("clicked");
    } else
    {
        header.classList.add("header-close");
        header.classList.remove("header-open");
        threeBars.classList.add("header-close-element-three-bars");
        threeBars.classList.remove("header-open-element-three-bars");
        cross.classList.add("header-close-element-cross");
        cross.classList.remove("header-open-element-cross");

        logo.classList.add("header-close-element-logo");
        logo.classList.remove("header-open-element-logo");
        logo_title.classList.add("header-close-element-logo-title");
        logo_title.classList.remove("header-open-element-logo-title");

        menu.classList.add("header-close-element-menu");
        menu.classList.remove("header-open-element-menu");
        menu_items.forEach(function (item) {
            item.classList.add("header-close-element-menu-item");
        });
        menu_items.forEach(function (item) {
            item.classList.remove("header-open-element-menu-item");
        });

        link.classList.add("header-close-element-link");
        link.classList.remove("header-open-element-link");
        link_tel.classList.add("header-close-element-link-tel");
        link_tel.classList.remove("header-open-element-link-tel");
        link_tel_numbers.forEach(function (item) {
            item.classList.add("header-close-element-link-tel-number");
        });
        link_tel_numbers.forEach(function (item) {
            item.classList.remove("header-open-element-link-tel-number");
        });

        link_email.classList.add("header-close-element-link-email");
        link_email.classList.remove("header-open-element-link-email");
        link_email_address.classList.add("header-close-element-link-email-address");
        link_email_address.classList.remove("header-open-element-link-email-address");

        link_image.classList.add("header-close-element-link-image");
        link_image.classList.remove("header-open-element-link-image");
        link_image_second.classList.add("header-close-element-link-image-second");
        link_image_second.classList.remove("header-open-element-link-image-second");

        console.log("clicked2");
    }
}
























