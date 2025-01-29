//for clicked products js yaha likhunga me

document.addEventListener("DOMContentLoaded",()=>{
    let cardclickedArr = (localStorage.getItem("cardClicked"))?JSON.parse(localStorage.getItem("cardClicked")) : "not clicked";
    console.log(cardclickedArr);
})

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

