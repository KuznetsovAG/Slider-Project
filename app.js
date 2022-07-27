const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveSliders()

        slide.classList.add('active')
    })
}

function clearActiveSliders() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    }
    )
}