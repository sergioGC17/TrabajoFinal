//Quitar header cuando se baje
var antposicion = window.pageYOffset;
window.onscroll = function() {
  var nuevaPos = window.pageYOffset;
  if (antposicion <= nuevaPos) {
    ocultarMenu();
  } else {
    mostrarMenu();
  }
  antposicion = nuevaPos;
};

function ocultarMenu() {
  var menu = document.getElementById("menu");
  menu.style.transition = "top 3s"
  menu.style.top = "-100%";
}

function mostrarMenu() {
  var menu = document.getElementById("menu");
  menu.style.transition = "top 1s"
  menu.style.top = "0";
}

//Menú pequeño
function myFunction() {
  var x = document.getElementsByClassName("contenido")[0];
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
