var slideIndex = 3;
showSlides(slideIndex);

function changeSlide(index) {
  showSlides((slideIndex += index));
}

function currentSlide(index) {
  showSlides((slideIndex = index));
}

function showSlides(index) {
  var i;
  var slides = $(".carousel-item");
  var dots = $(".dot");
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
