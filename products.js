const products = [
  { name: "Sample Product", price: "₹999", image: "product1.jpg" }
];

const container = document.getElementById("product-list");
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;
  container.appendChild(card);
});
