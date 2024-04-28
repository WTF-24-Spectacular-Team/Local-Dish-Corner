// document.addEventListener("DOMContentLoaded", function () {
//   const queryString = window.location.search;
//   const urlParam = new URLSearchParams(queryString);
//   const serialized = urlParam.get("details");

//   const trackOrder = JSON.parse(decodeURIComponent(serialized));

//   const displayCartContent = () => {
//     if (Array.isArray(trackOrder) && trackOrder.length > 0) {
//       const item = trackOrder[0]; // Assuming you're only dealing with the first item

//       const imageElement = document.getElementById("image");
//       if (imageElement) imageElement.src = item.image;

//       const nameElement = document.getElementById("name");
//       if (nameElement) nameElement.innerText = item.type; // Assuming item.type holds the food name

//       const quantityElement = document.getElementById("quantity");
//       if (quantityElement) quantityElement.innerText = item.quantity;

//       const grossTotalElement = document.getElementById("gross-total");
//       if (grossTotalElement) grossTotalElement.innerText = item.subtotal;

//       const subtotalElement = document.getElementById("subtotal");
//       if (subtotalElement) subtotalElement.innerText = item.subtotal;

//       const deliveryElement = document.getElementById("delivery");
//       if (deliveryElement) deliveryElement.innerText = item.delivery;

//       const totalElement = document.getElementById("total");
//       if (totalElement) totalElement.innerText = item.total;
//     }
//   };

//   displayCartContent();
// });
