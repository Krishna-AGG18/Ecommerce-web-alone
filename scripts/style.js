// Javascript for all styles....
import {content_recomm} from "./recommended.js"
import { bestSeller } from "./bestseller.js";
//for showoff container
let changeText = ["Chronotrend way to make easy choices !!", "Confused on which watch to buy?", "Don't worry our watch collection got your back!", "Find best watches based on your preferences!", "Shop ChronoTrend Now!!"];
let textpara = document.querySelector(".showoff p");

let index = 0;

setInterval(() => {
    textpara.innerHTML = changeText[index];
    index = (index + 1) % changeText.length;
}, 2500);

//for slider-2 recommended ke liye
//content load nhi hora tha isliye ye event listener lagaya mene yaha ok!!
document.addEventListener("DOMContentLoaded",()=>{
    let recommended = document.querySelector(".recommended .items");
    let best_seller = document.querySelector(".best-seller-items");
    // console.log(best_seller)
        let strii = ""; // Generate your HTML content here
        content_recomm.forEach((card, index) => {
            strii += `
            <div class="card">
            <div class="image">
            <img src="${card.img}" alt="watch${index + 1}">
            </div>
            <div class="info">
            <div class="name">${card.name}</div>
            <div class="desc">${card.desc}</div>
            <div class="rate">${card.rate}  &nbsp;&nbsp;&nbsp;<strike>${card.str}</strike></div>
            </div>
            <i class="fa-solid fa-plus addToCart"></i>
            </div>
            `});
        // console.log(strii)
        document.querySelector(".recommended .items").innerHTML = `${strii}`;
        best_seller.innerHTML = strii;
});
document.addEventListener("DOMContentLoaded", () => {
    let sliderDivs = document.querySelectorAll(".recommended .items .card");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    var counter = 0;

    // Set initial positions of the cards
    sliderDivs.forEach((div, index) => {
        div.style.left = `${index * 326}px`;
    });

    const slideDiv = () => {
        // Prevent sliding past the boundaries
        if (counter < 0) {
            counter = 0;
        } else if (counter > sliderDivs.length - 1) {
            counter = sliderDivs.length - 1;
        }
        // Apply transform to each div based on the counter
        sliderDivs.forEach(div => {
            div.style.transform = `translateX(-${counter * 326}px)`;
        });
    };

    // Add event listeners for left and right buttons
    left.addEventListener("click", () => {
        counter--;
        slideDiv();
    });

    right.addEventListener("click", () => {
        counter++;
        slideDiv();
    });
    //for bestseller
    let bestsellercards = document.querySelectorAll(".best-seller-items .card")
    let bestLeft = document.querySelector(".best-left")
    let bestright = document.querySelector(".best-right")
    let bestCount = 0
    
    bestsellercards.forEach((cards, index) => {
        cards.style.left = `${index * 326}px`;
    })
    
    const slideCard = () => {
        if (counter < 0)
            counter = 0;
        else if (counter > bestsellercards.length - 1)
            counter = bestsellercards.length - 1;
    
        bestsellercards.forEach((card) => {
            card.style.transform = `translateX(-${counter * 326}px)`;
        })
    }
    
    bestLeft.addEventListener("click", () => {
        counter--;
        slideCard();
    })
    
    bestright.addEventListener("click", () => {
        counter++;
        slideCard();
    })
});

//for best seller grid 
let brands = document.querySelector(".shop-brands");
var str = "";
bestSeller.forEach((elem,index)=>{
    str +=`
        <img src="${elem}" alt="brand${index+1}">
    `;
});
brands.innerHTML = str;
//for addtocart button
let cards = document.querySelectorAll(".card");
let addtobtns = document.querySelectorAll(".addToCart");

cards.forEach((card) => {
    let addtobtn = card.querySelector(".addToCart");
    card.addEventListener("mouseover", () => {
        addtobtn.style.opacity = "1";
        // addtobtn.style.right = "20px";
        addtobtn.style.bottom = "35px";
    })
    card.addEventListener("mouseout", () => {
        addtobtn.style.opacity = "0";
        // addtobtn.style.right = "10px";
        addtobtn.style.bottom = "0px";
    })
})

//for hamburger
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


function adjustContentPadding() {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.slide-container');
    const navbarHeight = navbar.offsetHeight;
    content.style.paddingTop = `${navbarHeight}px`;
  }

  // Run on page load
  window.addEventListener('load', adjustContentPadding);

  // Run on window resize
  window.addEventListener('resize', adjustContentPadding);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(item => {
        item.addEventListener("click",()=>{
            if(localStorage.getItem("cardClicked") == null){
                let cardclickedArr = [];
                let cardClickedItem = {
                    imagesrc : item.querySelector(".image img").src,
                    name : item.querySelector(".info .name").innerHTML,
                    desc : item.querySelector(".info .desc").innerHTML,
                    price : item.querySelector(".info .rate").innerHTML,
                    desc : item.querySelector(".info .desc").innerHTML,
                    rating : '★★★★☆'
                }
                cardclickedArr.push(cardClickedItem);
                localStorage.setItem("cardClicked",JSON.stringify(cardclickedArr));
            }
            else{
                let cardclickedArr = JSON.parse(localStorage.getItem("cardClicked"));
                cardclickedArr = [];
                let cardClickedItem = {
                    imagesrc : item.querySelector(".image img").src,
                    name : item.querySelector(".info .name").innerHTML,
                    desc : item.querySelector(".info .desc").innerHTML,
                    price : item.querySelector(".info .rate").innerHTML,
                    desc : item.querySelector(".info .desc").innerHTML,
                    rating : '★★★★☆'
                }
                cardclickedArr.push(cardClickedItem);
                localStorage.setItem("cardClicked",JSON.stringify(cardclickedArr));
            }
            console.log("card clicked", item.querySelector(".info .name"));
        })
    });
});

