// functions for add tocart buttons
let addtoCartbtns = document.querySelectorAll(".addToCart");
addtoCartbtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(localStorage.getItem("chronoCart") == null){
            let chronoCart = [];
            let parent = btn.parentElement;
            let name = parent.querySelector(".info .name").innerHTML;
            let desc = parent.querySelector(".info .desc").innerHTML;
            let rate = parent.querySelector(".info .rate").innerHTML;
            let image = parent.querySelector(".image img").src;
            chronoCart.push({
                img : image,
                prodname : name,
                proddesc :desc,
                price : rate
            })
            localStorage.setItem("chronoCart",JSON.stringify(chronoCart));
        }
        else{
            let chronoCart = JSON.parse(localStorage.getItem("chronoCart"));
            let parent = btn.parentElement;
            let name = parent.querySelector(".info .name").innerHTML;
            let desc = parent.querySelector(".info .desc").innerHTML;
            let rate = parent.querySelector(".info .rate").innerHTML;
            let image = parent.querySelector(".image img").src;
            chronoCart.push({
                img : image,
                prodname : name,
                proddesc :desc,
                price : rate
            })
            localStorage.setItem("chronoCart",JSON.stringify(chronoCart));
        }
    })
})
