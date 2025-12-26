
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      }
    });
  });
  // JS/products.js

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card .rent-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const card = btn.closest(".product-card");
      const product = {
        name: card.querySelector("h3").innerText,
        price: card.querySelector(".price").innerText,
        img: card.querySelector("img").src,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(product.name + " added to cart ✅");
    });
  });
});