//for clicked products js yaha likhunga me

document.addEventListener("DOMContentLoaded",()=>{
    let cardclickedArr = (localStorage.getItem("cardClicked"))?JSON.parse(localStorage.getItem("cardClicked")) : "not clicked";
    console.log(cardclickedArr);
})
//hamburger 
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
//for product showcase on the page .....
let cardClickedArr = JSON.parse(localStorage.getItem("cardClicked"))
let imagecont = document.querySelector(".cardContainer .image");
let info = document.querySelector(".cardContainer .info")
console.log(cardClickedArr[0].name)
console.log(info.querySelector(".name").innerHTML)
let imageContImg = imagecont.querySelector("img");
imageContImg.src = cardClickedArr[0].imagesrc;

let prodName = info.querySelector(".name");
prodName.innerText = cardClickedArr[0].name;

let prodPrice = info.querySelector(".rate");
prodPrice.innerHTML = cardClickedArr[0].price;

let prodRating = info.querySelector(".rating");
prodRating.innerText = cardClickedArr[0].rating;

//for add to cart button
document.addEventListener("DOMContentLoaded",()=>{
    let addToCartbtn = document.querySelector(".addToCart");
    addToCartbtn.addEventListener("click",()=>{
        let chronoCartArr = (localStorage.getItem("chronoCart"))?JSON.parse(localStorage.getItem("chronoCart")) : [];
        let cardClickedItem = {
            img : document.querySelector(".image img").src,
            prodname : document.querySelector(".info .name").innerText,
            proddesc : document.querySelector(".info .desc").innerHTML,
            price : document.querySelector(".info .rate").innerHTML,
            rating : '★★★★☆'
        }
        chronoCartArr.push(cardClickedItem);
        localStorage.setItem("chronoCart",JSON.stringify(chronoCartArr));
    
        let cartCount = document.querySelector(".length")
        cartCount.innerHTML = (localStorage.getItem("chronoCart"))? JSON.parse(localStorage.getItem("chronoCart")).length : "0";
    })
})

window.addEventListener("load",()=>{
    let cartCount = document.querySelector(".length")
    
    cartCount.innerHTML = (localStorage.getItem("chronoCart"))? JSON.parse(localStorage.getItem("chronoCart")).length : "0";
})