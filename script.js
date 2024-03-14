
/* Show navbar */
let menu = document.querySelector('#menu');
let navabar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navabar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navabar.classList.remove('active');
}



/* Image  Slider */
let currentSlide = 0;

function showSlide(index) {

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slideshow 
setInterval(nextSlide, 5000);