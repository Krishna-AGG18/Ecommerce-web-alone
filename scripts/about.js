// function adjustPaddingAbout(){
//     const navbar = document.querySelector("nav");
//     const text = document.querySelector(".main");

//     const navheight = navbar.offsetHeight;
//     text.style.paddingTop = `${navheight}px`
// }

// window.addEventListener("load",adjustPaddingAbout);
// window.addEventListener("resize",adjustPaddingAbout);

//for hamburger
let btn = document.querySelector(".hamburger")
let slider = document.querySelector(".sliding-links")
btn.addEventListener("click", () => {
    if (slider.classList.contains("sliding-links-effect")) {
        slider.classList.remove("sliding-links-effect");
    } else {
        slider.classList.add("sliding-links-effect");
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        if (slider.classList.contains("sliding-links-effect")) {
            slider.classList.remove("sliding-links-effect");
        }
    }
});