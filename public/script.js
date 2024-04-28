// see more for gallery effect
const wholeGallery = document.querySelector("#wholeGallery");
const galleryPreview = document.querySelector("#galleryPreview");
const seeMoreBtn = document.querySelector("#galleryBtn");

const burgerNav = document.querySelector("#burgerNav");
const burgerNavItemHolder = document.querySelector("#burgerNavItemHolder");

let openCloseGallery = (event) => {

    if (event.target.id == "galleryBtn") {
        // hide gallery preview
        galleryPreview.classList.add("hidden");
        galleryPreview.classList.remove("flex");
        // show whole gallery
        wholeGallery.classList.remove("hidden");
        wholeGallery.classList.add("block");
        // hide see more btn
        seeMoreBtn.classList.remove("block");
        seeMoreBtn.classList.add("hidden");
    } else {
        // show gallery preview
        galleryPreview.classList.add("flex");
        galleryPreview.classList.remove("hidden");
        // hide whole gallery
        wholeGallery.classList.remove("block");
        wholeGallery.classList.add("hidden");
        // show see more btn
        seeMoreBtn.classList.remove("hidden");
        seeMoreBtn.classList.add("block");
    }
}

// burger nav open and close function
let OpenCloseburgerNav = (e) => {
    // burgerNav
    if(burgerNavItemHolder.classList.contains("hidden") || e.target == "a"){
        burgerNavItemHolder.classList.remove("hidden");
        burgerNavItemHolder.classList.add("flex");
    } else {
        burgerNavItemHolder.classList.remove("flex");
        burgerNavItemHolder.classList.add("hidden");
    }
}