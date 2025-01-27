// Javascript for all styles....

//for showoff container
let changeText = ["Chronotrend way to make easy choices !!", "Confused on which watch to buy?", "Don't worry our watch collection got your back!", "Find best watches based on your preferences!", "Shop ChronoTrend Now!!"];
let textpara = document.querySelector(".showoff p");

let index = 0;

setInterval(() => {
    textpara.innerHTML = changeText[index];
    index = (index + 1) % changeText.length;
}, 2500);

//for slider-2 recommended ke liye
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

