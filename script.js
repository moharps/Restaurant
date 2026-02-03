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
