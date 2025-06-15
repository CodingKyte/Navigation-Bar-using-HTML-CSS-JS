const menuElem=document.querySelector(".menu")
const closeSidebarElem=document.querySelector(".close-sidebar")
const navContainerElem=document.querySelector(".nav-container")

menuElem.addEventListener("click",()=>{
    navContainerElem.classList.add("active")
})
closeSidebarElem.addEventListener("click",()=>{
    navContainerElem.classList.remove("active")
})