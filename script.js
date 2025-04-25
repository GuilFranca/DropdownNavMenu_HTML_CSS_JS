const navBar = document.querySelector('.navbar');
const searchBox = document.querySelector('.search-box .bx-search');

// Barra de pesquisa

searchBox.addEventListener('click', () => {
    navBar.classList.toggle("showInput");

    if(navBar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
})

// sidebar open close

let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let closeOpenBtn = document.querySelector('.nav-links .bx-x');
let navLinks = document.querySelector('.nav-links');
let logo = document.querySelector('.logo');

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "0";

    // if(innerWidth <= 800 && innerWidth > 370){
    //     logo.style.display = 'none';
    // }

})

closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "-100%";

    // if(innerWidth <= 800 && innerWidth > 370){
    //     logo.style.display = 'block';
    // }

})

// sidebar submenu

let htmlcssArrow = document.querySelector('.htmlcss-arrow');

htmlcssArrow.addEventListener('click', ()=>{
    navLinks.classList.toggle('show1');
});

let moreArrow = document.querySelector('.more-arrow');

moreArrow.addEventListener('click', ()=>{
    navLinks.classList.toggle('show2');
});

let jsArrow = document.querySelector('.js-arrow');

jsArrow.addEventListener('click', ()=>{
    navLinks.classList.toggle('show3');
});

