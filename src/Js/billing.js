const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);

const selectedFood = [];
for (const [id, quantity] of urlParam) {
  const foodItem = details.find((item) => item.id === parseInt(id));
  if (foodItem) {
    selectedFood.push({ ...foodItem, quantity: parseInt(quantity) });
  }
}

selectedFood.forEach((item) => {
  item.type = document.getElementById("name");
});
