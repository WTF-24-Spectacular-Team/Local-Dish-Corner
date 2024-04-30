let details = [
  {
    id: 1,
    image: "./src/assets/Shopping-rice.png",
    type: "Jollof Rice and Chicken",
    location: "Ikeja, Lagos",
    price: 1500,
    order: "Order Now",
  },
  {
    id: 2,
    image: "./src/assets/Egusi-&-Poundo.png",
    type: "Egusi Soup & Pounded Yam",
    location: "Ojota",
    price: 2500,
    order: "Order Now",
  },
  {
    id: 3,
    image: "./src/assets/nkwobi2.png",
    type: "Nkwobi",
    location: "Abulegba",
    price: 4000,
    order: "Order Now",
  },
];

function displayFavoriteFood() {
  for (let j = 0; j < details.length; j++) {
    const foodListing = details[j];
    let imageItem = document.getElementById("fav" + (j + 1));
    let itemName = document.getElementById("title" + (j + 1));
    let priceElement = document.getElementById("price" + (j + 1));
    let location = document.getElementById("location" + (j + 1));
    let order = document.getElementById("order" + (j + 1));

    if (foodListing) {
      imageItem.src = foodListing.image;
      itemName.textContent = foodListing.type;
      priceElement.textContent = `#${foodListing.price}`;
      location.textContent = foodListing.location;
      order.textContent = foodListing.order;
    } else {
      imageItem.src = "";
      foodName.textContent = "";
      priceElement.textContent = "";
      location.textContent = "";
      order.textContent = "";
    }
  }
}

displayFavoriteFood();

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with class 'food-btn'
  const foodButtons = document.querySelectorAll(".food-btn");

  // Attach click event listener to each button
  foodButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Extract the index from the data attribute
      const id = parseInt(this.dataset.id);
      // Use the index to select the corresponding food item from the 'details' array
      const selectedFood = details[id];
      // Now you can do whatever you want with the selectedFood object
      return selectedFood;
    });
  });
});
