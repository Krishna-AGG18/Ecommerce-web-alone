//for cart page javascript code
export function updateCart() {
    if (localStorage.getItem("chronoCart") && localStorage.getItem("chronoCart") !== "[]") {
        let empty = document.querySelector(".empty");
        let container = document.querySelector(".containerCart");
        empty.classList.add("displayNone");
        container.classList.remove("displayNone");

        let chronoCart = JSON.parse(localStorage.getItem("chronoCart"));
        let cartItemCont = document.querySelector(".containerCart .cartItems");
        let str = "";

        chronoCart.forEach((element, index) => {
            str += `
        <div class="cartItem${index + 1}">
                <div class="prodleft">
                    <div class="prodimg">
                        <img src="${element.img}" alt="">
                    </div>
                    <div class="increase">
                        <button class="minus">-</button>
                        <span class="qty">10</span>
                        <button class="plus">+</button>
                    </div>
                </div>
                <div class="prodright">
                    <div class="prodetails">
                        <div class="prodname">${element.prodname}</div>
                        <div class="prodiscrip">${element.proddesc}</div>
                        <div class="prize">${element.price}</div>
                        <div class="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="btnrem">
                        <button class="remove">REMOVE</button>
                    </div>
                </div>
            </div>`
        });
        cartItemCont.innerHTML = str;

        const removeButtons = document.querySelectorAll(".btnrem .remove");
        removeButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                chronoCart.splice(index, 1); // Remove item from array
                localStorage.setItem("chronoCart", JSON.stringify(chronoCart)); // Update localStorage
                updateCart(); // Re-render cart
                let cartCount = document.querySelector(".length")

                cartCount.innerHTML = (localStorage.getItem("chronoCart")) ? JSON.parse(localStorage.getItem("chronoCart")).length : "0";

            });
        });

        const recipt = document.querySelector(".containerCart .recipt")
        let length = chronoCart.length;
        let rate = 0;
        chronoCart.forEach((e) => {
            rate += parseInt(e.price.split(" ")[0].replace("$", ""))
        })
        let discrate = 0.1 * rate;
        let totalamt = rate - discrate;
        let str2 = "";
        str2 = `
        <div class="head">
                PRICE DETAILS
            </div>
            <div class="price">
                <div>
                    Price(${length} item)
                </div>
                <div>
                    $${rate}
                </div>
            </div>
            <div class="discount">
                <div>
                    Discount
                </div>
                <div>
                   $${discrate}
                </div>
            </div>
            <div class="delivery">
                <div>
                    Delivery Charges
                </div>
                <div>
                    <strike>$25</strike> FREE
                </div>
            </div>
            <hr>
            <div class="total">
                <h4>TOTAL AMOUNT</h4>
                <div class="totalrate">$${totalamt}</div>
            </div>
            <hr>
            YOU SAVED $${discrate} i.e, 10% of the total amount.`
        recipt.innerHTML = str2;
    } else {
        let empty = document.querySelector(".empty");
        let container = document.querySelector(".containerCart");
        if (empty.classList.contains("displayNone")) {
            empty.classList.remove("displayNone");
        }
        if (container.classList.contains("displayNone")) {
            console.log("empty");
        } else {
            container.classList.add("displayNone");
        }
    }
}

window.addEventListener("load", updateCart);
window.addEventListener("storage", (event) => {
    if (event.key === "chronoCart") {
        console.log("chronoCart updated:", event.newValue);
        updateCart(); // Re-run the cart update logic
    }
});

window.addEventListener("load", () => {
    let cartCount = document.querySelector(".length")

    cartCount.innerHTML = (localStorage.getItem("chronoCart")) ? JSON.parse(localStorage.getItem("chronoCart")).length : "0";
})

//for slider
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