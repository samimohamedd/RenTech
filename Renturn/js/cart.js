

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.querySelector(".cart-items");
  const summaryContainer = document.querySelector(".summary-items");
  const subtotalContainer = document.querySelector(".subtotal span");
  const summaryTotals = document.querySelector(".summary-totals");

  cartContainer.innerHTML = "<h2>Your Cart</h2>";

  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>Your cart is empty 🛒</p>";
    if (summaryContainer) summaryContainer.innerHTML = "<p>No items</p>";
    if (subtotalContainer) subtotalContainer.textContent = "0 EGP";
    if (summaryTotals) {
      summaryTotals.innerHTML = `
        <div class="summary-line"><span>Subtotal</span><span>0 EGP</span></div>
        <div class="summary-line"><span>Delivery Fee</span><span>0 EGP</span></div>
        <div class="summary-line total"><span>Total</span><span>0 EGP</span></div>
      `;
    }
    return;
  }

  let subtotal = 0;

  // Reset containers
  if (summaryContainer) summaryContainer.innerHTML = "";

  cart.forEach((item, index) => {
    let priceNum = parseFloat(item.price);
    subtotal += priceNum;

    // Cart section
    cartContainer.innerHTML += `
      <article class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="item-details">
            <h3>${item.name}</h3>
            <p class="item-meta"><i class="fas fa-calendar-days"></i> Rent duration not set</p>
            <div class="item-actions">
                <a href="#" class="remove" onclick="removeItem(${index})">Remove</a>
            </div>
        </div>
        <div class="item-price">
            <p class="price">${item.price} EGP</p>
            <p class="duration">per day</p>
        </div>
      </article>
    `;

    // Order summary
    if (summaryContainer) {
      summaryContainer.innerHTML += `
        <div class="summary-item">
          <div class="item-info">
            <img src="${item.img}" alt="${item.name}">
            <span class="summary-item-name">${item.name}</span>
          </div>
          <span class="summary-item-price">${item.price} EGP</span>
        </div>
      `;
    }
  });

  // Footer in cart
  cartContainer.innerHTML += `
    <div class="cart-footer">
      <div class="subtotal">Subtotal: <span>${subtotal} EGP</span></div>
      <a href="../pages/checkout.html" class="checkout-btn">Proceed to Checkout &rarr;</a>
    </div>
  `;

  // Totals in summary
  if (summaryTotals) {
    let delivery = subtotal > 0 ? 17.2 : 0;
    let total = subtotal + delivery;

    summaryTotals.innerHTML = `
      <div class="summary-line"><span>Subtotal</span><span>${subtotal} EGP</span></div>
      <div class="summary-line"><span>Delivery Fee</span><span>${delivery.toFixed(2)} EGP</span></div>
      <div class="summary-line total"><span>Total</span><span>${total.toFixed(2)} EGP</span></div>
    `;
  }
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
