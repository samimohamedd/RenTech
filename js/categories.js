
  // JS/products.js

// 1) كليك على الكارد كله → يفتح اللينك بتاعه
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
});

// 2) لما الصفحة تجهز
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card .rent-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // تمنع الكارد إنه يتفاعل مع الكليك

      const card = btn.closest(".product-card");
      const product = {
        name: card.querySelector("h3").innerText,
        price: card.querySelector(".price").innerText,
        img: card.querySelector("img").src,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} added to cart ✅`);
    });
  });
});
