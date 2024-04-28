document.addEventListener("DOMContentLoaded", function () {
  const forwardBtn = document.getElementById("forward-btn");
  const backwardBtn = document.getElementById("backward-btn");

  const testimonials = document.querySelectorAll(".testimonial-item");

  // testimonials.forEach((testimonial, index) => {

  testimonials.forEach((testimonial) => {
    testimonial.classList.add("hidden");
  });

  const initialTestimonials = Array.from(testimonials).slice(0, 3);
  initialTestimonials.forEach((testimonial) => {
    testimonial.classList.remove("hidden");
  });

  let currentTestimonialIndex = 0;

  function showNextTestimonial() {
    if (currentTestimonialIndex > 4) {
      currentTestimonialIndex = 4;
    }
    if (currentTestimonialIndex < 4) {
      testimonials[currentTestimonialIndex].classList.add("hidden");
    }
    currentTestimonialIndex++;
    testimonials[currentTestimonialIndex].classList.remove("hidden");
    console.log(currentTestimonialIndex);
  }

  function showPreviousTestimonial() {
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = 0;
    }
    if (currentTestimonialIndex > 0) {
      testimonials[currentTestimonialIndex].classList.add("hidden");
    }
    currentTestimonialIndex--;
    testimonials[currentTestimonialIndex].classList.remove("hidden");
    console.log(currentTestimonialIndex);
  }

  forwardBtn.addEventListener("click", showNextTestimonial);

  backwardBtn.addEventListener("click", showPreviousTestimonial);
});
