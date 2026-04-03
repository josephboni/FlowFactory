// Usuario registrado
const usuarioRegistrado = {
  email: "admin@correo.com",
  password: "123456",
  nombre: "Admin"
};

// Iniciar sesión
document.getElementById("form-login").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
    localStorage.setItem("sesion", JSON.stringify({ nombre: usuarioRegistrado.nombre, email: usuarioRegistrado.email }));
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Correo o contraseña incorrectos.";
    errorMsg.style.color = "red";
  }
});