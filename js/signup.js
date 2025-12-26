const API_URL = "https://renturn.vercel.app/api/v1/auth/register";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // عشان ميفرش الصفحة

  const userData = {
    firstname: document.getElementById("firstName").value,
    lastname: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
    nationalID: document.getElementById("nationalID").value,
    role: "user",
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    document.getElementById("result").innerText = "✅ Register confirmed!";
  } catch (err) {
    document.getElementById("result").innerText = "❌Something went wrong.";
  }
}); 