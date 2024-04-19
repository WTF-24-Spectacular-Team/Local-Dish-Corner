const details = [
  {
    image: "src/assets/Shopping-rice.png",
    type: "Jollof Rice and Chicken",
    price: 1500,
    quantity: 0,
  },
  {
    image: "src/assets/Nkwobi.png",
    type: "Nkwobi",
    price: 4000,
    quantity: 0,
  },
  {
    image: "src/assets/Egusi & Poundo.png",
    type: "Egusi Soup & Pounded Yam",
    price: 1500,
    quantity: 1,
  },
];

let currQuantity = 0;
let newQuantity = 0;
let order = 0;
let moreOrder = order + 1;
let trackOrder = document.querySelector("#tracking");
