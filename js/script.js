var burgerBtn = document.querySelector(".header__burger")
var elHeader = document.querySelector("header")

burgerBtn.addEventListener("click", (evt) => {
    elHeader.classList.toggle("header--open")
})
