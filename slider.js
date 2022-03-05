// Initializing global variables
var slideIndex = 1;
var myTimeout;

// This code will be running when the document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
    showSlides(slideIndex); // Call the function
    });

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(myTimeout);
    showSlides(slideIndex = n);
}

// Auto showing slides one by one
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    myTimeout = setTimeout(showSlides, 5000); // Change image every 5 seconds
}