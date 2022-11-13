// .bar .bottom{ rotate(45deg) translate(7px, 7px)

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")


barsContainer.addEventListener('click', ()=>{
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})

