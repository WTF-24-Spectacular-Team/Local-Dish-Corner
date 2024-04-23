const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const visibleReview = document.getElementById("visible-review");
const hiddenReviews = document.querySelectorAll(".hidden-review");
let currentIndex = 0;

forwardBtn.addEventListener("click", () => {
  if (currentIndex < hiddenReviews.length) {
    visibleReview.innerText = hiddenReviews[currentIndex].innerText;
    hiddenReviews[currentIndex].style.display = "none";
    currentIndex++;
  }
});

backwardBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    visibleReview.innerText = hiddenReviews[currentIndex].innerText;
    hiddenReviews[currentIndex].style.display = "block";
  }
});
