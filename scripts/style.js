// Javascript for all styles....
// let contact = document.querySelector(".contact");
// let contact_open = document.querySelector(".contact-open")
// let github = document.querySelector(".github");
// let linkedin = document.querySelector(".linkedin");
// let insta = document.querySelector(".insta");

// console.log(contact.innerHTML)
// contact.addEventListener("click",(e)=>{
//     document.querySelector(".contact").classList.toggle("none");
//     document.querySelector(".contact-open").classList.toggle("block")
// })

// contact_open.addEventListener("click",(e)=>{
//     document.querySelector(".contact").classList.toggle("none");
//     document.querySelector(".contact-open").classList.toggle("block")
// })

//for showoff container
let changeText = ["Chronotrend way to make easy choices !!","Confused on which watch to buy?", "Don't worry our watch collection got your back!", "Find best watches based on your preferences!", "Shop ChronoTrend Now!!"];
let textpara = document.querySelector(".showoff p");

let index = 0; 

setInterval(() => {
    textpara.innerHTML = changeText[index]; 
    index = (index + 1) % changeText.length; 
}, 2500); 
