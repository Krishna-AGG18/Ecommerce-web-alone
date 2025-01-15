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