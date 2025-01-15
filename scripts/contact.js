let str = "Thank you !!";
let arr = Array.from(str);
let dytextcont = document.querySelector(".form-section .image .dynamic");

// Function to display text dynamically
function appendText() {
    dytextcont.innerText = " "; // Clear the text container initially
    let index = 0; // Start with the first character
    let interval = setInterval(() => {
        if (index < arr.length) {
            dytextcont.append(arr[index]); // Append the next character
            index++;
        } else {
            clearInterval(interval); // Stop the interval when all characters are displayed
        }
    }, 200); // Delay between each character
}

// Loop the animation every 10 seconds
setInterval(() => {
    dytextcont.innerText = " "; // Clear the text container
    setTimeout(appendText, 2000); // Add a delay of 2 seconds before displaying the text again
}, 6000);

// Initial text animation
appendText();


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
    if (window.innerWidth > 768) {
        if (slider.classList.contains("sliding-links-effect")) {
            slider.classList.remove("sliding-links-effect");
        }
    }
});