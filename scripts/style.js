// Javascript for all styles....

//for showoff container
let changeText = ["Chronotrend way to make easy choices !!","Confused on which watch to buy?", "Don't worry our watch collection got your back!", "Find best watches based on your preferences!", "Shop ChronoTrend Now!!"];
let textpara = document.querySelector(".showoff p");

let index = 0; 

setInterval(() => {
    textpara.innerHTML = changeText[index]; 
    index = (index + 1) % changeText.length; 
}, 2500); 

//for slider-2 recommended ke liye
let sliderDivs = document.querySelectorAll(".recommended .items .card");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
var counter = 0;

sliderDivs.forEach((div,index)=>{
    div.style.left = `${index*326}px`;
})

const slideDiv = ()=>{
    if (counter < 0) {
        counter = 0; // Prevent sliding left past the first image
    } else if (counter > sliderDivs.length - 1) {
        counter = sliderDivs.length - 1; // Prevent sliding right past the last image
    }
    sliderDivs.forEach(div=>{
        div.style.transform = `translateX(-${counter*326}px)`
    })
}
left.addEventListener("click",()=>{
    counter--;
    slideDiv();
})
right.addEventListener("click",()=>{
    counter++;
    slideDiv();
})