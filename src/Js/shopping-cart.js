// const details = [
//   {
//     id: 1,
//     image: "/src/assets/Shopping-rice.png",
//     type: "Jollof Rice and Chicken",
//     price: 1500,
//     quantity: 1,
//     delivery: 200,
//   },
//   {
//     id: 2,
//     image: "/src/assets/nkwobi2.png",
//     type: "Nkwobi",
//     price: 4000,
//     quantity: 1,
//     delivery: 200,
//   },
//   {
//     id: 3,
//     image: "/src/assets/Egusi & Poundo.png",
//     type: "Egusi Soup & Pounded Yam",
//     price: 2500,
//     quantity: 1,
//     delivery: 200,
//   },
// ];

// const foodItem = details[currQuantity];

// const updateSubtotal = () => {
//   const subtotalValue = foodItem.price * foodItem.quantity;
//   subTotal.innerText = `NGN ${subtotalValue}`;
// };

// const updateBill = () => {
//   // const foodItem = details[currQuantity];
//   const billValue = foodItem.price * foodItem.quantity;
//   bill.innerText = `NGN ${billValue}`;
// };

// const sumTotal = () => {
//   // const foodItem = details[currQuantity];
//   const totalBill = foodItem.price * foodItem.quantity;
//   const billValue = totalBill + foodItem.delivery;
//   total.innerText = `NGN ${billValue}`;
// };

// let currQuantity = 0;
// let order = 0;
// let checkout = document.getElementById("tracking");
// let myImage = document.getElementById("image");
// let foodName = document.getElementById("food");
// let price = document.getElementById("price");
// let subTotal = document.getElementById("subtotal");
// let bill = document.getElementById("bills");
// let delivery = document.getElementById("delivery");
// let total = document.getElementById("total");
// let quantity = document.getElementById("quantity");
// let addMore = document.getElementById("add-more");
// let addLess = document.getElementById("add-less");
// let deleted = document.getElementById("clear");

// function displayData() {
//   const foodItem = details[currQuantity];

//   foodName.innerText = foodItem.type;
//   price.innerText = `NGN ${foodItem.price}`;
//   updateSubtotal();
//   updateBill();
//   sumTotal();
//   quantity.innerText = `${foodItem.quantity}`;
//   myImage.style.display = "inline";
//   myImage.src = foodItem.image;
//   myImage.alt = foodItem.type;
//   delivery.innerText = `NGN ${foodItem.delivery}`;
// }

// displayData();

// addMore.addEventListener("click", () => {
//   details[currQuantity].quantity++;
//   order++;
//   updateQuantity();
// });

// addLess.addEventListener("click", () => {
//   if (details[currQuantity].quantity > 0) {
//     details[currQuantity].quantity--;
//     order--;
//     updateQuantity();
//   }
// });

// deleted.addEventListener("click", () => {
//   details.forEach((item) => {
//     item.quantity = 0;
//   });
//   order = 0;
//   updateQuantity();
// });

// const updateQuantity = () => {
//   quantity.innerText = `${details[currQuantity].quantity}`;
//   updateSubtotal();
//   updateBill();
//   sumTotal();
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const cartBtn = document.getElementById("cart-btn");
//   cartBtn.addEventListener("click", () => {
//     const serialized = encodeURIComponentencodeURIComponent(
//       JSON.stringify(details)
//     );

//     window.location.href = `/src/html/billing.html?details=${serialized}`;
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const queryString = window.location.search;
//   const urlParam = new URLSearchParams(queryString);
//   const serialized = urlParam.get("details");

//   const trackOrder = JSON.parse(decodeURIComponent(serialized));

//   const displayCartContent = () => {
//     if (Array.isArray(trackOrder) && trackOrder.length > 0) {
//       const item = trackOrder[0]; // Assuming you're only dealing with the first item

//       const imageElement = document.getElementById("image");
//       if (imageElement) imageElement.src = foodItem.image;

//       const nameElement = document.getElementById("name");
//       if (nameElement) nameElement.innerText = item.type;

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

let details = [
  {
    id: 1,
    image: "/src/assets/Shopping-rice.png",
    type: "Jollof Rice and Chicken",
    price: 1500,
    quantity: 1,
    delivery: 200,
  },
  {
    id: 2,
    image: "/src/assets/nkwobi2.png",
    type: "Nkwobi",
    price: 4000,
    quantity: 1,
    delivery: 200,
  },
  {
    id: 3,
    image: "/src/assets/Egusi & Poundo.png",
    type: "Egusi Soup & Pounded Yam",
    price: 2500,
    quantity: 1,
    delivery: 200,
  },
];

let currQuantity = 0;
let order = 0;
let checkout = document.getElementById("tracking");
let myImage = document.getElementById("image");
let food = document.getElementById("food");
let price = document.getElementById("price");
let subTotal = document.getElementById("subtotal");
let bill = document.getElementById("bills");
let delivery = document.getElementById("delivery");
let total = document.getElementById("total");
let quantity = document.getElementById("quantity");
let addMore = document.getElementById("add-more");
let addLess = document.getElementById("add-less");
let deleted = document.getElementById("clear");
let foodName = document.getElementById("name");
let gross = document.getElementById("gross-total");

const updateSubtotal = () => {
  const foodItem = details[currQuantity];
  const subtotalValue = foodItem.price * foodItem.quantity;
  subTotal.innerText = `NGN ${subtotalValue}`;
};

const updateBill = () => {
  const foodItem = details[currQuantity];
  const billValue = foodItem.price * foodItem.quantity;
  bill.innerText = `NGN ${billValue}`;
};

const sumTotal = () => {
  const foodItem = details[currQuantity];
  const totalBill = foodItem.price * foodItem.quantity;
  const billValue = totalBill + foodItem.delivery;
  total.innerText = `NGN ${billValue}`;
};

const updateQuantity = () => {
  const foodItem = details[currQuantity];
  quantity.innerText = `${foodItem.quantity}`;
  updateSubtotal();
  updateBill();
  sumTotal();
};

function displayData() {
  const foodItem = details[currQuantity];

  price.innerText = `NGN ${foodItem.price}`;
  updateSubtotal();
  updateBill();
  sumTotal();
  quantity.innerText = `${foodItem.quantity}`;
  myImage.style.display = "inline";
  myImage.src = foodItem.image;
  myImage.alt = foodItem.type;
  food.innerText = foodItem.type;
  delivery.innerText = `NGN ${foodItem.delivery}`;
}

displayData();

addMore.addEventListener("click", () => {
  details[currQuantity].quantity++;
  order++;
  updateQuantity();
});

addLess.addEventListener("click", () => {
  if (details[currQuantity].quantity > 0) {
    details[currQuantity].quantity--;
    order--;
    updateQuantity();
  }
});

deleted.addEventListener("click", () => {
  details.forEach((item) => {
    item.quantity = 0;
  });
  order = 0;
  updateQuantity();
});

document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("cart-btn");
  cartBtn.addEventListener("click", () => {
    const serialized = encodeURIComponent(JSON.stringify(details));
    window.location.href = `/src/html/billing.html?details=${serialized}`;
  });

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const serialized = urlParams.get("details");

  const trackOrder = JSON.parse(decodeURIComponent(serialized));

  const displayCartContent = () => {
    if (Array.isArray(trackOrder) && trackOrder.length > 0) {
      const item = trackOrder[0];

      myImage.src = item.image;
      foodName.innerText = item.type;
      quantity.innerText = item.quantity;
      gross.innerText = item.subtotal;
      subTotal.innerText = item.subtotal;
      delivery.innerText = item.delivery;
      total.innerText = item.total;
    }
  };

  displayCartContent();
});
