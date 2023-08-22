const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slider');

// carousel.style.transform = 'scale(0.5)';

let curSlide = 0;

const maxSlide = slides.length;
// curSlide = slide;
// Function to go to a specific slide
const gotoSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};

gotoSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
};

// Attach event listeners to navigation buttons (if you have them)
// document.querySelector('.next-btn').addEventListener('click', nextSlide);
// document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Auto-advance the carousel every 2000ms (2 seconds)
setInterval(nextSlide, 3000);

   

