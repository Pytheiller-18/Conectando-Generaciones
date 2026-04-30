function alternarMenu() {
  const menu = document.getElementById("menuMovil");
  menu.classList.toggle("activo");
}

function abrirRegistro() {
  document.getElementById("modalRegistro").classList.add("abierto");
}

function cerrarCapaRegistro(e) {
  if (e.target.id === "modalRegistro") {
    document.getElementById("modalRegistro").classList.remove("abierto");
  }
}