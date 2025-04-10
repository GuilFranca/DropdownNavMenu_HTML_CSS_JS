const navBar = document.querySelector('.navbar');
const searchBox = document.querySelector('.search-box .bx-search');

searchBox.addEventListener('click', () => {
    navBar.classList.toggle("showInput");

    if(navBar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
})