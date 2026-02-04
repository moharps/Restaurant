
const menuItems = [
  { name: "Fried Chicken & Chips", price: 450 },
  { name: "Beef Burger", price: 350 },
  { name: "Pizza", price: 600 },
  { name: "Fresh Juice", price: 200 }
];

const menuDiv = document.getElementById("menu");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>KES ${item.price}</p>
  `;

  menuDiv.appendChild(card);
});


document.getElementById("orderBtn").addEventListener("click", function () {
  window.open("https://wa.me/254722453814", "_blank");
});



const form = document.getElementById("orderForm");
const btn = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const order = document.getElementById("order").value;

  btn.textContent = "Sending...";
  
  setTimeout(() => {
    document.getElementById("message").textContent =
      `Thanks ${name}! Your order for "${order}" has been received.`;
    btn.textContent = "Send Order";
    form.reset();
  }, 1000);
});
