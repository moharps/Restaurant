document.getElementById("orderBtn").addEventListener("click", function () {
  window.open("https://wa.me/254722453814", "_blank");
});



document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const order = document.getElementById("order").value;

  document.getElementById("message").textContent =
    `Thanks ${name}! Your order for "${order}" has been received.`;
});
