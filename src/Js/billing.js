const displayCartContent = (details) => {
  if (Array.isArray(details) && details.length > 0) {
    const item = details[0];

    const subtotalValue = item.price * item.quantity;
    const billValue = subtotalValue + item.delivery;

    myImage.src = item.image;
    food.innerText = item.type;
    quantity.innerText = item.quantity;
    gross.innerText = `${item.subtotalValue}`;
    subTotal.innerText = `${item.subtotalValue}`;
    delivery.innerText = `${item.delivery}`;
    total.innerText = item.billValue;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const serialized = urlParams.get("details");

  const trackOrder = JSON.parse(decodeURIComponent(serialized));
  displayCartContent(trackOrder);
});
