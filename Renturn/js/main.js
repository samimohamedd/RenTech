// CATEGORY BUTTONS - active state
const categoryButtons = document.querySelectorAll(".cat-btn");
if (categoryButtons.length > 0) {
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// -----------------------------------------------------Search bar validation--------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        validateSearch();
      }
    });
  }
});

function validateSearch() {
  let input = document.getElementById("search")?.value.trim().toLowerCase();
  if (!input) {
    let error = document.getElementById("error");
    if (error) error.style.visibility = "visible";
  } else {
    switch (input) {
      case "electronics":
        window.location.href = "./pages/electronics.html";
        break;
      case "tools":
        window.location.href = "./pages/tools.html";
        break;
      case "clothes":
        window.location.href = "./pages/clothes.html";
        break;
      case "event supplies":
        window.location.href = "./pages/event.html";
        break;
      case "music":
        window.location.href = "./pages/music.html";
        break;
    }
  }
}

// -----------------------------------------------------Scroller--------------------------------------
const scrollContainer = document.getElementById("latestPro");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

if (leftArrow && scrollContainer) {
  leftArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 150;
  });
}

if (rightArrow && scrollContainer) {
  rightArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft += 150;
  });
}

const scrollDiv = document.getElementById("catScroll");
if (scrollDiv) {
  if (leftArrow) {
    leftArrow.addEventListener("click", () => {
      scrollDiv.scrollLeft -= 150;
    });
  }
  if (rightArrow) {
    rightArrow.addEventListener("click", () => {
      scrollDiv.scrollLeft += 150;
    });
  }
}

// ---------------- عرض الكاتيجوريز في الجدول ----------------
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const categories = await API.getCategories();
    console.log("Categories from API:", categories);

    const tableBody = document.querySelector("#userTable");
    if (tableBody) {
      tableBody.innerHTML = ""; // نمسح أي داتا قديمة

      categories.forEach((cat) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>#${cat.id}</td>
          <td>${cat.name}</td>
          <td>${cat.productsCount || 0}</td>
          <td class="status">
            <button class="${cat.active ? "active-button" : "inactive-button"}">
              ${cat.active ? "Active" : "Inactive"}
            </button>
          </td>
          <td class="actions">
            <button class="edit-btn"><img src="../photos/edit.png" alt="Edit" /></button>
            <button class="delete-btn" data-id="${cat.id}"><img src="../photos/trash.png" alt="Delete" /></button>
          </td>
        `;

        tableBody.appendChild(row);
      });
    }
  } catch (err) {
    console.error("Error loading categories:", err);
    // alert("في مشكلة في تحميل الكاتيجوريز 🚨");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const categories = await API.getCategories();
    console.log("Categories from API:", categories);

    const tableBody = document.querySelector("#userTable");
    tableBody.innerHTML = "";

    categories.forEach((cat) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>#${cat.id}</td>
        <td>${cat.name}</td>
        <td>${cat.productsCount || 0}</td>
        <td class="status">
          <button class="${cat.active ? "active-button" : "inactive-button"}">
            ${cat.active ? "Active" : "Inactive"}
          </button>
        </td>
        <td class="actions">
          <button class="edit-btn">✏️</button>
          <button class="delete-btn" data-id="${cat.id}">🗑️</button>
        </td>
      `;

      // delete button
      row.querySelector(".delete-btn").addEventListener("click", async () => {
        if (confirm("متأكد عايز تمسح؟")) {
          await API.deleteCategory(cat.id);
          row.remove();
        }
      });

      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading categories:", err);
  }
});
