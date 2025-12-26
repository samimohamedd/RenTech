const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");

const images = document.querySelectorAll(".modal-trigger");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("open");
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
    }
});

let count = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;

const counter = document.getElementById('count');
const increase = document.querySelector('.add-to-cart');

counter.textContent = count;

increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;

    localStorage.setItem("cartCount", count);
});