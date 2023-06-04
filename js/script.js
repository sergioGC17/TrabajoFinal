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


//Carrusel
window.onload = function () {
  const radioRojo = document.getElementById("rojo");
  const radioNegro = document.getElementById("negro");
  const radioBlanco = document.getElementById("blanco");

  radioRojo.addEventListener("change", () => {
    if (radioRojo.checked) {
      imagenes[0] = "img/rojo/compositor1.png";
      imagenes[1] = "img/rojo/compositor2.png";
      imagenes[2] = "img/rojo/compositor3.png";
      imagenes[3] = "img/rojo/compositor4.png";
      fotoActual = 0;
      cargarImagen();
    }
  });
  radioNegro.addEventListener("change", () => {
    if (radioNegro.checked) {
      imagenes[0] = "img/negro/compositor1.png";
      imagenes[1] = "img/negro/compositor2.png";
      imagenes[2] = "img/negro/compositor3.png";
      imagenes[3] = "img/negro/compositor4.png";
      fotoActual = 0;
      cargarImagen();
    }
  });
  radioBlanco.addEventListener("change", () => {
    if (radioBlanco.checked) {
      imagenes[0] = "img/blanco/compositor1.png";
      imagenes[1] = "img/blanco/compositor2.png";
      imagenes[2] = "img/blanco/compositor3.png";
      imagenes[3] = "img/blanco/compositor4.png";
      fotoActual = 0;
      cargarImagen();
    }
  });


  const tiempo = 1000;
  let fotoActual = 0;
  let $anterior = document.querySelector('#anterior');
  let $siguiente = document.querySelector('#siguiente');
  let $imagen = document.querySelector('#imagen');
  let intervalo;

  function siguienteFoto() {
      if(fotoActual >= imagenes.length - 1) {
          fotoActual = 0;
      } else {
          fotoActual++;
      }
      cargarImagen();
  }
  function AnteriorFoto() {
      if(fotoActual <= 0) {
          fotoActual = imagenes.length - 1;
      } else {
          fotoActual--;
      }
      cargarImagen();
  }
  function cargarImagen () {
      $imagen.style.backgroundImage = `url(${imagenes[fotoActual]})`;
  }
  $siguiente.addEventListener('click', siguienteFoto);
  $anterior.addEventListener('click', AnteriorFoto);
  cargarImagen();
} 


