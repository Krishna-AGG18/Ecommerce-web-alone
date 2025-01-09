let content_recomm = [
    {
        img: "https://i.pinimg.com/736x/53/83/4a/53834a3c28ec290844bedbefd3a5df63.jpg",
        name: "Babylonian II",
        desc: "Babylonische Tradition auf handgraviertem Zifferblatt.",
        rate: "$2700",
        str: "$3000"
    },
    {
        img: "https://i.pinimg.com/736x/d0/ab/cd/d0abcd113a29ea97e0f4f9fe8ef21839.jpg",
        name: "OLEVS Women's Watch",
        desc: "Quartz Watch Chronograph Date Waterproof",
        rate: "$270",
        str: "$300"
    },
    {
        img: "https://i.pinimg.com/736x/5d/92/1c/5d921c0cf599e9fb25cd21c674fdc69a.jpg",
        name: "Men and Women Sports Watch",
        desc: "Unisex Watch Waterproof Date",
        rate: "$200",
        str: "$300"
    },
    {
        img: "https://img.kwcdn.com/product/fancy/0c924ae0-d4bc-441c-bc8e-a184d985fb55.jpg?imageView2/2/w/800/q/70/format/webp",
        name: "Men's Stylish Quartz Watch",
        desc: "Best Seller for Mens",
        rate: "$150",
        str: "$264"
    },
    {
        img: "https://i.pinimg.com/736x/2a/e9/c0/2ae9c00e63fa87ecd2c2b2a35ed99b5d.jpg",
        name: "6 Iconic Watch",
        desc: "Unisex Watch With Waterproofing",
        rate: "$220",
        str: "$280"
    },
    {
        img: "https://i.pinimg.com/736x/85/a7/f4/85a7f449f9d7fe4e4d181df39c628a4c.jpg",
        name: "Luxury Watch",
        desc: "Modern Glam Living Room Inspiration",
        rate: "$2700",
        str: "$3000"
    },
    {
        img: "https://i.pinimg.com/736x/ec/92/80/ec9280d1c281bc1965f7d424fe520232.jpg",
        name: "Fashion Mens Stainless Steel Watch",
        desc: "Wristwatch Calendar Luminous Clock Men Business Casual Watch",
        rate: "$100",
        str: "$300"
    },
    {
        "img": "https://i.pinimg.com/736x/97/5d/79/975d79164383bed66d3a8a41d5758fdd.jpg",
        "name": "Luxury Women Watch",
        "desc": "Best Luxury Women Watch To Buy",
        "rate": "$270",
        "str": "$588"
    },
    {
        "img": "https://i.pinimg.com/736x/85/fe/0b/85fe0b365de5c78fd173a2ec84c3deba.jpg",
        "name": "Gucci Women Wrist Watch",
        "desc": "Classic Light Coloured Watch",
        "rate": "$499",
        "str": "$1200"
    },
    {
        "img": "https://i.pinimg.com/736x/7f/7d/a4/7f7da48b4bca692476b3deaaaa06af04.jpg",
        "name": "Babylonian II",
        "desc": "Babylonische Tradition auf handgraviertem Zifferblatt.",
        "rate": "$2700",
        "str": "$3000"
    },
    {
        "img": "https://i.pinimg.com/736x/a7/6f/d9/a76fd9f8cb0ee24864948633fe3e54e0.jpg",
        "name": "Babylonian II",
        "desc": "Babylonische Tradition auf handgraviertem Zifferblatt.",
        "rate": "$2700",
        "str": "$3000"
    },
    {
        "img": "https://i.pinimg.com/736x/30/68/5c/30685ca7d725e3d785ed9c6a52aad8fd.jpg",
        "name": "Babylonian II",
        "desc": "Babylonische Tradition auf handgraviertem Zifferblatt.",
        "rate": "$2700",
        "str": "$3000"
    },
    {
        "img": "https://i.pinimg.com/736x/2a/e9/c0/2ae9c00e63fa87ecd2c2b2a35ed99b5d.jpg",
        "name": "Babylonian II",
        "desc": "Babylonische Tradition auf handgraviertem Zifferblatt.",
        "rate": "$2700",
        "str": "$3000"
    }
];

let recommended = document.querySelector(".recommended .items");
let best_seller = document.querySelector(".best-seller-items");
// let recomm_html = recommended.innerHTML;

strii = "";
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
    <button class="addToCart">+</button>
    </div>
    `
});
best_seller.innerHTML = strii;
recommended.innerHTML= strii;
