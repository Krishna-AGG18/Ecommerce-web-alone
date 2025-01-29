//for clicked products js yaha likhunga me

document.addEventListener("DOMContentLoaded",()=>{
    let cardclickedArr = (localStorage.getItem("cardClicked"))?JSON.parse(localStorage.getItem("cardClicked")) : "not clicked";
    console.log(cardclickedArr);
})

let imagecont = document.querySelector(".cardContainer .image");
let info = document.querySelector(".cardContainer .info")

let imageContImg = imagecont.querySelector("img");
let cardClickedArr = JSON.parse(localStorage.getItem("cardClicked"))
imageContImg.src = cardClickedArr[0].imagesrc;

