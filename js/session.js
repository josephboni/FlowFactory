const sesion = JSON.parse(localStorage.getItem("sesion"));

if (sesion) {
  document.querySelector(".register").innerHTML = `
    <span id="bienvenida">Bienvenido, ${sesion.nombre}</span>
    <button class="btn-register" onclick="cerrarSesion()">Cerrar sesión</button>
  `;
} else {
  document.querySelector(".register").innerHTML = `
    <button class="btn-register" onclick="window.location.href='iniciarsecion.html'">Iniciar sesión</button>
    <button class="btn-register" onclick="window.location.href='crearcuenta.html'">Crear cuenta</button>
  `;
}

function cerrarSesion() {
  localStorage.removeItem("sesion");
  window.location.href = "index.html";
}