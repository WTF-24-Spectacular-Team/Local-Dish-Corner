document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("a");

  // Set initial background color for the first navigation link
  let listColor = null;
  listItems.forEach((element, index) => {
    if (index === 0) {
      element.style.backgroundColor = "#f88100";
      element.style.color = "#ffffff";
      listColor = element;
    }
    // Add click event listener to each navigation link
    element.addEventListener("click", () => {
      if (listColor) {
        listColor.style.backgroundColor = ""; // Reset previous link's background color
        listColor.style.color = "";
      }
      element.style.backgroundColor = "#f88100"; // Set background color for clicked link
      element.style.color = "#ffffff";
      listColor = element; // Update the currently clicked link
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.getElementById("moreButton");
  const dropdownList = document.getElementById("dropdownList");

  moreButton.addEventListener("click", function () {
    dropdownList.classList.toggle("hidden");
  });
});

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
