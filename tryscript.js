// Slideshow Functionality with Manual Controls
let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let interval; // Variable to store the interval

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}

// Function to start automatic slideshow
function startSlideshow() {
    showSlides();
    interval = setInterval(showSlides, 3000); // Auto-change every 3 seconds
}

// Function to stop automatic slideshow
function stopSlideshow() {
    clearInterval(interval);
}

// Function for previous slide
function prevSlide() {
    stopSlideshow();
    slideIndex -= 2; // Move back two steps to counteract auto-increment
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

// Function for next slide
function nextSlide() {
    stopSlideshow();
    showSlides();
}

// Start slideshow on page load
document.addEventListener("DOMContentLoaded", function () {
    startSlideshow();

    // Adding event listeners to navigation buttons
    document.getElementById("prev-btn").addEventListener("click", prevSlide);
    document.getElementById("next-btn").addEventListener("click", nextSlide);
});
