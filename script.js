const botonMenu = document.querySelector("#boton-menu");

botonMenu.addEventListener("click", function () {
  document.body.classList.toggle("menu-cerrado");
});