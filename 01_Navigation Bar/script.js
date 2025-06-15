const menuBtn = document.querySelector(".menu")
const navLinksElm = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {
    navLinksElm.classList.toggle("active")
})