document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("a");

  // Set initial background color for the first navigation link
  let prevLink = "";
  listItems.forEach((element, index) => {
    if (index === 0) {
      element.style.backgroundColor = "#f88100";
      element.style.color = "#ffffff";
      prevLink = element;
    }
    // Add click event listener to each navigation link
    element.addEventListener("click", (event) => {
      event.preventDefault;
      if (prevLink) {
        prevLink.style.backgroundColor = ""; // Reset previous link's background color
        prevLink.style.color = "";
      }
      element.style.backgroundColor = "#f88100"; // Set background color for clicked link
      element.style.color = "#ffffff";
      prevLink = element; // Update the currently clicked link
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".btn");

  // Set initial background color for the first navigation link
  let listColor = null;
  listItems.forEach((element, index) => {
    if (index === 0) {
      element.style.backgroundColor = "#389580";
      element.style.color = "#ffffff";

      listColor = element;
    }
    // Add click event listener to each navigation link
    element.addEventListener("click", () => {
      if (listColor) {
        listColor.style.backgroundColor = ""; // Reset previous link's background color
        listColor.style.color = "";
        listColor.style.borderColor = "";
      }
      element.style.backgroundColor = "#389580"; // Set background color for clicked link
      element.style.color = "#ffffff";
      element.style.borderColor = "#389580";
      listColor = element; // Update the currently clicked link
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const moreButton = document.getElementById("moreButton");
//   const dropdownList = document.getElementById("dropdownList");

//   moreButton.addEventListener("click", function () {
//     dropdownList.classList.toggle("hidden");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const moreBtns = document.querySelectorAll(".moreBtn");
  moreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.parentNode.querySelector(".dropdown");
      if (content.classList.contains("hidden")) {
        content.classList.toggle("hidden");
      } else {
        content.classList.toggle("hidden");
      }
    });
  });
});

// window.onload = function () {
//   let cookies = document.cookie.split(";");

//   let cookieHead = document.getElementById("cookie-head");
//   let cookie = document.getElementById("cookie");
//   let cookieImage = document.getElementById("cookie-icon");

//   cookie.innerText =
//     "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.";
//   cookieHead.innerText = "We Value Your Privacy";
//   cookieImage.src = "./src/assets/Cookie-icon.png";

//   for (var i = 0; i < cookies.length; i++) {
//     cookie.innerHTML += cookies[i] + "<br>";
//   }
// };
