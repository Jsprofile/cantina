// Header

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")
const header = document.querySelector("header")


barsContainer.addEventListener('click', () => {
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})

window.onscroll = () => {


}



//Animetions

const fadeTopSimpleElements = document.querySelectorAll('[data-animation]')

window.onscroll = () => {

    if (window.pageYOffset >= 100) {
        header.classList.add("activeScrollHeader")
    }else{
        header.classList.remove("activeScrollHeader")
    }

    var scrollTop = window.pageYOffset + 800

    fadeTopSimpleElements.forEach(element => {

        if (scrollTop > element.offsetTop && !element.dataset.delay) {
            element.classList.add("anime")
        }

        if (element.dataset.delay) {
            let delay = parseInt(element.dataset.delay)

            setTimeout(() => {
                if (scrollTop > element.offsetTop) {
                    element.classList.add("anime")
                }
            }, delay)
        }
    })
}





//Change BigCard H3

let bigCardH3 = document.querySelector('.bigContainer h3')

if (window.innerWidth <= 800) {
    bigCardH3.innerHTML = "Tenha mais controle e facilidade para comprar seus salgados"
}



