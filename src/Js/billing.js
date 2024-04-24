const details = [
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

let currQuantity = 0;
let order = 0;
let checkout = document.getElementById("tracking");
let myImage = document.getElementById("image");
let foodName = document.getElementById("food");
let price = document.getElementById("price");
let subTotal = document.getElementById("subtotal");
let bill = document.getElementById("bills");
let delivery = document.getElementById("delivery");
let total = document.getElementById("total");
let quantity = document.getElementById("quantity");
let addMore = document.getElementById("add-more");
let addLess = document.getElementById("add-less");
let deleted = document.getElementById("clear");

function displayData() {
  const foodItem = details[currQuantity];

  foodName.innerText = foodItem.type;
  price.innerText = `NGN ${foodItem.price}`;
  updateSubtotal();
  updateBill();
  sumTotal();
  quantity.innerText = `x${foodItem.quantity}`;
  myImage.style.display = "inline";
  myImage.src = foodItem.image;
  myImage.alt = foodItem.type;
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

const updateQuantity = () => {
  quantity.innerText = `${details[currQuantity].quantity}`;
  updateSubtotal();
  updateBill();
  sumTotal();
};
