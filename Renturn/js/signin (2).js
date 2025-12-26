document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    nationalID: document.getElementById("nationalID").value.trim(),
  };

  console.log("Data sent to API:", userData); // ✅ راقب ده في Console

  try {
    const res = await fetch("https://renturn.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log("API Response:", data); // ✅ شوف ده في Console

    if (data.token) {
      if (data.role === "admin") {
        window.location.href = "../pages/adminpage.html";
      } else {
        window.location.href = "../index.html";
      }
    } else {
      document.getElementById("result").innerText = "❌ " + (data.error || "Login failed");
    }
  } catch (err) {
    document.getElementById("result").innerText = "❌ Server Error: " + err.message;
  }
});
//forget password and otp

// document.querySelector(".forgot-link").addEventListener("click", function (e) {
//   e.preventDefault(); 
//   document.getElementById("forgotModal").style.display = "block"; // يفتح المودال
// });

//   const email = document.querySelector(".forgot-link").value.trim();
// console.log("Data sent to API:", email);

//   try {
//     const res = await fetch("https://renturn.vercel.app/api/v1/auth/forgotpassword", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });
//     const data = await res.json();
//     console.log("API Response:", data);
//     if (data.success) {
//       document.getElementById("otpSection").style.display = "block";
//       document.getElementById("result").innerText = "✅ OTP sent to your email.";
//     } else {
//       document.getElementById("result").innerText = "❌ " + (data.error || "Failed to send OTP");
//     }
//   } catch (err) {
//     document.getElementById("result").innerText = "❌ Server Error: " + err.message;
//   }
// document.getElementById("otpForm").addEventListener("submit", async function (e) {


