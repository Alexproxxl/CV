//Menu Header

const btnIdiomas = document.getElementById("btn-idiomas");
const menuIdiomas = document.getElementById("menu-idiomas");

btnIdiomas.addEventListener("click", () => {
    console.log("Esta pasando algo aquí?");
    menuIdiomas.toggleAttribute("hidden"); // usa el atributo HTML, no estilos
  });


const paginaActual = window.location.pathname.split("/").pop();
const icono = document.querySelector("nav ul li a.fa-solid"); // primer <a> con fa-solid

if (paginaActual === "index-light.html") {
  icono.classList.remove("fa-moon");
  icono.classList.add("fa-sun");
} else {
  icono.classList.remove("fa-sun");
  icono.classList.add("fa-moon");
}


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

