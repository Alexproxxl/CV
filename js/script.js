//Menu Header

const btnIdiomas = document.getElementById("btn-idiomas");
const menuIdiomas = document.getElementById("menu-idiomas");

btnIdiomas.addEventListener("click", () => {
    console.log("Esta pasando algo aquí?");
    menuIdiomas.toggleAttribute("hidden"); // usa el atributo HTML, no estilos
  });

const boton = document.getElementById("boton-tema");
const caja = document.getElementById("icono-tema");


boton.addEventListener("click", () => {
  const main = document.getElementById("card-general");
  const body = document.getElementById("body");
  // Cambiar de 'rojo' a 'verde' y viceversa
  if (caja.classList.contains("fa-sun")) {
    caja.classList.remove("fa-sun");
    caja.classList.add("fa-moon");
    main.style.background = 'var(--fondo-dark-2)';
    body.style.background = 'var(--fondo-dark-1)';
    console.log('Tendria que cambiar el fondo');

  } else {
    caja.classList.remove("fa-moon");
    caja.classList.add("fa-sun");
    main.style.background = 'var(--fondo-light-2)';
    body.style.background = 'var(--fondo-light-1)';
  }
});


function contacto() {
    var info = document.getElementById('card-contacto');
    var cardGeneral = document.getElementById('card-general');
    cardGeneral.style.filter = 'blur(5px)';
    info.style.display = 'block';
    console.log('Botón clickeado');
}

function contacto2() {
    var info = document.getElementById('card-contacto2');
    var cardGeneral = document.getElementById('card-general');
    cardGeneral.style.filter = 'blur(5px)';
    info.style.display = 'block';
    console.log('Botón clickeado');
}

function salir() {
    var info = document.getElementById('card-contacto');
    var info2 = document.getElementById('card-contacto2')
    var cardGeneral = document.getElementById('card-general');
    info.style.display = "none";
    info2.style.display = "none";
    cardGeneral.style.filter = 'blur(0)';
    console.log('Que esta pasando aquí?');
}

