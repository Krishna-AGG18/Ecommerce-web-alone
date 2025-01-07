let bestSeller =[
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd005b872/images/TitanSBDesktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dweedae1b7/images/fastrackdesktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw72198a2d/images/sonatadesktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34585a51/images/homepage/Police_desktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwcf32cbd5/images/tommydesktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw86f256ad/images/homepage/All_Banners/KC_D.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw55073896/images/homepage/Anne-K_desktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw85b1e038/images/homepage/Coach_desktop.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwe74f68c7/images/homepage/New%20Banners/Xylys-Mobile-v1.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5a74dc66/images/homepage/New%20Banners/Zoop-Mobile-v1.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwab155043/images/Brand_Edge_D.jpg",
    "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwaf60a50a/images/Brand_Nebula_D.jpg"
];

let brands = document.querySelector(".shop-brands");
str = "";
bestSeller.forEach((elem,index)=>{
    str +=`
        <img src="${elem}" alt="brand${index+1}">
    `;
});
brands.innerHTML = str;