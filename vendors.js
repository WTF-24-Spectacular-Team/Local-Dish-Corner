const vendors = [
  {
    id: 1,
    image: "../assets/vendor1.png",
    vendor: "Juliana Peace",
    address: "No 3, ILEYA STREET, EGBEDA LAGOS",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/peace-icon.png",
  },
  {
    id: 2,
    image: "../assets/vendor2.png",
    vendor: "God's Grace Spot",
    address: "No 2, OLA STREET, ABULEGBA",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/God's-grace-icon.png",
  },
  {
    id: 3,
    image: "../assets/vendor3.png",
    vendor: "Tope Micheals",
    address: "NO 3, QUEENS MOTEL IKEJA",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/choplife-icon.png",
  },
  {
    id: 4,
    image: "../assets/vendor4.png",
    vendor: "Korede Martins",
    address: "NO 1, QUEENS MOTEL",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/korede-icon.png",
  },
  {
    id: 5,
    image: "../assets/vendor5.png",
    vendor: "Iya Peju",
    address: "NO 13, CITY GATE, LAGOS",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/iya-aladuke-icon.png",
  },
  {
    id: 6,
    image: "../assets/vendor6.png",
    vendor: "Musa Ahmed",
    address: "NO 2, OLA STREET",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/mMusa-logo.png",
  },
  {
    id: 7,
    image: "../assets/vendor7.png",
    vendor: "Alabi Tosin",
    address: "NO 2, ILEYA STREET EGBEDA, LAGOS",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/amala-sky-icon.png",
  },
  {
    id: 8,
    image: "../assets/vendor8.png",
    vendor: "Okonkwo Jones",
    address: "NO 2, SHOGUNLE STREET, LAGOS",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/papa-jones-icon.png",
  },
  {
    id: 9,
    image: "../assets/vendor9.png",
    vendor: "Daniel Aboh",
    address: "NO 4, COLLINS STREET AGEGE",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/deli-icon.png",
  },
  {
    id: 10,
    image: "../assets/vendor10.png",
    vendor: "Lilian Dare",
    address: "NO 2, SHOPRITE ROAD IKEJA",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/lilian-icon.png",
  },
  {
    id: 11,
    image: "../assets/vendor11.png",
    vendor: "Chika Duru",
    address: "NO 2, TOLA ESTATE",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/duru-icon.png",
  },
  {
    id: 12,
    image: "../assets/vendor12.png",
    vendor: "EMEKA CHIMDI",
    address: "NO 5, AJAO ESTATE MEIRAN",
    ratingIcon: "../assets/Rating-icon.png",
    logoIcon: "../assets/citi-delight-icon.png",
  },
];

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

function displayVendorDetails() {
  for (let i = 0; i < vendors.length; i++) {
    const vendorListing = vendors[i];
    let imageElement = document.getElementById("image" + (i + 1));
    let vendorName = document.getElementById("name" + (i + 1));
    let addressElement = document.getElementById("address" + (i + 1));
    let logoIcon = document.getElementById("logo-icon" + (i + 1));
    let rating = document.getElementById("rating" + (i + 1));

    if (vendorListing) {
      imageElement.src = vendorListing.image;
      vendorName.textContent = vendorListing.vendor;
      addressElement.textContent = vendorListing.address;
      logoIcon.src = vendorListing.logoIcon;
      rating.src = vendorListing.ratingIcon;
    } else {
      imageElement.src = "";
      vendorName.textContent = "";
      addressElement.textContent = "";
      logoIcon.src = "";
      rating.src = "";
    }
  }
}

displayVendorDetails();

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
