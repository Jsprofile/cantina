// ScrollTop

var btnScroll = document.querySelector('.scrollTop')

window.onscroll = () => {

    // ScrollTop appear

    if (window.pageYOffset >= 100) {
        btnScroll.classList.add('scrollTop-active')
    } else {
        btnScroll.classList.remove('scrollTop-active')
    }
}

btnScroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
})