document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // Reset errors
  document.querySelectorAll(".error-message").forEach(el => {
    el.style.display = "none";
    el.textContent = "";
  });
  document.querySelectorAll("input").forEach(el => el.classList.remove("error"));

  // Function to show error inside input-group
  function showError(input, message) {
    const group = input.closest(".input-group");
    const errorMsg = group.querySelector(".error-message");
    input.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.textContent = message;
  }

  // Email check
  const email = document.getElementById("email");
  if (email.value.trim() === "" || !email.value.includes("@")) {
    showError(email, "Invalid email, please check and try again.");
    valid = false;
  }

  // National ID check
  const nationalID = document.getElementById("nationalID");
  if (nationalID.value.trim() === "" || isNaN(nationalID.value)) {
    showError(nationalID, "Invalid national ID, please check and try again.");
    valid = false;
  }

  // Password check
  const password = document.getElementById("password");
  if (password.value.trim() === "" || password.value.length <2) {
    showError(password, "Invalid password, please check and try again.");
    valid = false;
  }
});



const modal = document.getElementById("forgotModal");
const forgotLink = document.querySelector(".forgot-link");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.getElementById("cancelBtn");

// Open modal
forgotLink.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

// Close modal with X
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal with Cancel
cancelBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// OTP Modal
const otpModal = document.getElementById("otpModal");
const cancelOtpBtn = document.getElementById("cancelOtpBtn");
const closeBtns = document.querySelectorAll(".close");

// افتح المودال بعد ما يتبعت reset (مثال)
document.querySelector("#forgotModal .btn-primary").addEventListener("click", function(e) {
  e.preventDefault();
  otpModal.style.display = "flex";
});

// اقفال المودال
cancelOtpBtn.onclick = function () {
  otpModal.style.display = "none";
};
closeBtns.forEach(btn => {
  btn.onclick = function () {
    btn.parentElement.parentElement.style.display = "none";
  };
});

document.getElementById("verifyOtpBtn").addEventListener("click", function () {
  window.location.href ="./forgetpass.html"; 
});


