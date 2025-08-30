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
  const iconosContacto = document.getElementById("info-contacto");
  const iconosInfo = document.getElementById("iconos-info");
  // Cambiar de 'rojo' a 'verde' y viceversa
  if (caja.classList.contains("fa-sun")) {
      caja.classList.remove("fa-sun");
      caja.classList.add("fa-moon");

      main.style.background = 'var(--fondo-dark-2)';
      body.style.background = 'var(--fondo-dark-1)';
      body.style.color = 'var(--text-dark)';
      console.log('Tendria que cambiar el fondo');
    /* Iconos*/
      document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-dark)";});
      caja.style.color = 'var(--iconos-dark)';
      iconosInfo.style.color = 'var(--iconos-dark)';
  } else {
    caja.classList.remove("fa-moon");
    caja.classList.add("fa-sun");

    main.style.background = 'var(--fondo-light-2)';
    body.style.background = 'var(--fondo-light-1)';
    body.style.color = 'var(--text-light)';
    /* Iconos*/
    document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-light)";});
    caja.style.color = 'var(--iconos-light)';
    iconosInfo.style.color = 'var(--iconos-light)';
  }
});


function contacto() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('card-contacto').style.display = 'block';
  document.getElementById('card-contacto2').style.display = 'none';
}

function contacto2() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('card-contacto2').style.display = 'block';
  document.getElementById('card-contacto').style.display = 'none';
}

// Cierra al clicar en overlay
document.getElementById('overlay').addEventListener('click', function () {
  this.style.display = 'none';
});

// Evitar cierre si clicas dentro del modal
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

const main = document.querySelector(".main");

  main.addEventListener("mouseenter", () => {
    main.classList.add("expand"); // cuando entras con el mouse, se queda fijo
  });