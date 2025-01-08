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

//for bestseller
let bestsellercards = document.querySelectorAll(".best-seller-items .card")
let bestLeft = document.querySelector(".best-left")
let bestright = document.querySelector(".best-right")
let bestCount = 0

bestsellercards.forEach((cards,index)=>{
    cards.style.left = `${index*326}px`;
})

const slideCard = ()=>{
    if(counter<0)
        counter = 0;
    else if(counter> bestsellercards.length-1)
        counter = bestsellercards.length-1;

    bestsellercards.forEach((card)=>{
        card.style.transform = `translateX(-${counter*326}px)`;
    })
}

bestLeft.addEventListener("click",()=>{
    counter--;
    slideCard();
})

bestright.addEventListener("click",()=>{
    counter++;
    slideCard();
})