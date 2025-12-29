document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // حسابات تجريبية
  if (username === "admin" && password === "admin" && role === "admin") {
    localStorage.setItem("role", "admin");
    window.location.href = "dashboard.html";
  }
  else if (username === "user" && password === "user" && role === "user") {
    localStorage.setItem("role", "user");
    window.location.href = "dashboard.html";
  }
  else {
    alert("بيانات الدخول غير صحيحة");
  }
});
