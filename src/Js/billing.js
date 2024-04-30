let details = [
  {
    id: 1,
    image: "../assets/Shopping-rice.png",
    type: "Jollof Rice and Chicken",
    location: "Ikeja, Lagos",
    price: 1500,
    order: "Order Now",
  },
  {
    id: 2,
    image: "../assets/Egusi-&-Poundo.png",
    type: "Egusi Soup & Pounded Yam",
    location: "Ojota",
    price: 2500,
    order: "Order Now",
  },
  {
    id: 3,
    image: "../assets/nkwobi2.png",
    type: "Nkwobi",
    location: "Abulegba",
    price: 4000,
    order: "Order Now",
  },
];

let myImage = document.getElementById("image");
let foodName = document.getElementById("name");
let quantity = document.getElementById("quantity");
let gross = document.getElementById("gross-total");
let subTotal = document.getElementById("subtotal");
let delivery = document.getElementById("delivery");
let total = document.getElementById("total");

const displayCartContent = (details) => {
  if (Array.isArray(details) && details.length > 0) {
    const item = details[0];

    myImage.src = item.image;
    food.innerText = item.type;
    quantity.innerText = `x${item.quantity}`;
    gross.innerText = item.price * item.quantity;
    subTotal.innerText = item.price * item.quantity;
    delivery.innerText = item.delivery;
    total.innerText = item.price * item.quantity + item.delivery;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const serialized = urlParams.get("details");

  const trackOrder = JSON.parse(decodeURIComponent(serialized));
  displayCartContent(trackOrder);
});
