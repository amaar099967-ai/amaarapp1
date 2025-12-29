document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // بيانات تجريبية
    if (username === "admin" && password === "admin") {

      localStorage.setItem("loggedUser", JSON.stringify({
        username: "admin",
        role: "admin",
        loginTime: Date.now()
      }));

      // التحويل بعد النجاح
      window.location.href = "dashboard.html";

    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  });

});
