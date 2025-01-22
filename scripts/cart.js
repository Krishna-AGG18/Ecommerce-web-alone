//for cart page javascript code
function updateCart() {
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
            });
        });
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

window.addEventListener("load",updateCart);