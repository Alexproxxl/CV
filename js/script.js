//Menu Header

const boton = document.getElementById("boton-tema");
const caja = document.getElementById("icono-tema");


boton.addEventListener("click", () => {
  const main = document.getElementById("card-general");
  const body = document.getElementById("body");
  const iconosContacto = document.getElementById("info-contacto");
  const iconosContacto2 = document.getElementById("info-contacto-2");
  const iconosInfo = document.getElementById("iconos-info");
  const desplegableExperiencia = document.getElementById("box-desplegable-experiencia");
  const desplegableContacto = document.getElementById("box-desplegable-contacto");
  // Cambiar de 'rojo' a 'verde' y viceversa
  if (caja.classList.contains("fa-sun")) {
      caja.classList.remove("fa-sun");
      caja.classList.add("fa-moon");

      main.style.background = 'var(--fondo-dark-2)';
      body.style.background = 'var(--fondo-dark-1)';
      body.style.color = 'var(--text-dark)';
      iconosContacto.style.color = 'var(--text-dark)';
      iconosContacto2.style.color = 'var(--text-dark)';
      /* Iconos*/
      document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-dark)";});
      document.querySelectorAll("span").forEach(span => {span.style.color = "var(--iconos-dark)";});
      caja.style.color = 'var(--iconos-dark)';
      iconosInfo.style.color = 'var(--iconos-dark)';
      
      //Canviar color "desplegable"
      desplegableExperiencia.style.background = 'var(--fondo-dark-modal)';
      desplegableContacto.style.background = 'var(--fondo-dark-modal)';

  } else {
    caja.classList.remove("fa-moon");
    caja.classList.add("fa-sun");

    //Canviar el fondo de "Main y Body"
    main.style.background = 'var(--fondo-light-2)';
    body.style.background = 'var(--fondo-light-1)';

    //Canvia todos los textos del HTML a light
    body.style.color = 'var(--text-light) !important';
    iconosContacto.style.color = 'var(--text-light)';
    iconosContacto2.style.color = 'var(--text-light)';

    //Seleciona y establece color light a todos los "a"
    document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-light)";});
    document.querySelectorAll("span").forEach(span => {span.style.color = "var(--iconos-light)";});
    caja.style.color = 'var(--iconos-light)';
    iconosInfo.style.color = 'var(--iconos-light)';

     //Canviar color "desplegable"
      desplegableExperiencia.style.background = 'var(--fondo-light-modal)';
      desplegableContacto.style.background = 'var(--fondo-light-modal)';
  }
});


function contacto() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('card-contacto').style.display = 'block';
  document.getElementById('card-contacto2').style.display = 'none';
  document.getElementById('card-general').style.filter = 'blur(10px)';
}

function contacto2() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('card-contacto2').style.display = 'block';
  document.getElementById('card-contacto').style.display = 'none';
  document.getElementById('card-general').style.filter = 'blur(10px)';
}

// Cierra al clicar en overlay
document.getElementById('overlay').addEventListener('click', function () {
  this.style.display = 'none';
  document.getElementById('card-general').style.filter = 'blur(0px)';
});

// Evitar cierre si clicas dentro del modal
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
// cuando entras con el mouse, se queda fijo
const main = document.querySelector(".main");

  main.addEventListener("mouseenter", () => {
    main.classList.add("expand"); 
  });