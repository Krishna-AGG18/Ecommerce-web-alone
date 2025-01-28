//for clicked products js yaha likhunga me

document.addEventListener("DOMContentLoaded",()=>{
    let cardclickedArr = (localStorage.getItem("cardClicked"))?JSON.parse(localStorage.getItem("cardClicked")) : "not clicked";
    console.log(cardclickedArr);
})
