//Menu Header

import CambiarFoto from "./canvio-img.js"

const boton = document.getElementById("boton-tema");
const caja = document.getElementById("icono-tema");

boton.addEventListener("click", () => {
  const main = document.getElementById("card-general");
  const body = document.getElementById("body");
  const iconosContacto = document.getElementById("info-contacto");
  const iconosContacto2 = document.getElementById("info-contacto-2");
  const desplegableExperiencia = document.getElementById("box-desplegable-experiencia");
  const desplegableContacto = document.getElementById("box-desplegable-contacto");
  const spacer1 = document.getElementById("spacer1");
  const spacer2 = document.getElementById("spacer2");
  const foto = document.getElementById("foto");
 
  // Cambiar de 'rojo' a 'verde' y viceversa
  if (caja.classList.contains("fa-sun")) {
      caja.classList.remove("fa-sun");
      caja.classList.add("fa-moon");

      CambiarFoto(foto);

      main.style.background = 'var(--fondo-dark-2)';
      body.style.background = 'var(--fondo-dark-1)';
      body.style.color = 'var(--text-dark)';
      iconosContacto.style.color = 'var(--text-dark)';
      iconosContacto2.style.color = 'var(--text-dark)';

      /*Spacer*/
      spacer1.style.background = 'var(--text-dark)';
      spacer2.style.background = 'var(--text-dark)';
      /* Iconos*/
      document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-dark)";});
      document.querySelectorAll("span").forEach(span => {span.style.color = "var(--iconos-dark)";});
      caja.style.color = 'var(--iconos-dark)';
      
      //Canviar color "desplegable"
      desplegableExperiencia.style.background = 'var(--fondo-dark-modal)';
      desplegableContacto.style.background = 'var(--fondo-dark-modal)';

  } else {
    CambiarFoto(foto);

    caja.classList.remove("fa-moon");
    caja.classList.add("fa-sun");

    //Canviar el fondo de "Main y Body"
    main.style.background = 'var(--fondo-light-2)';
    body.style.background = 'var(--fondo-light-1)';

    //Canvia todos los textos del HTML a light
    body.style.color = 'var(--text-light) !important';
    iconosContacto.style.color = 'var(--text-light)';
    iconosContacto2.style.color = 'var(--text-light)';

    //Spacers
    spacer1.style.background = 'var(--text-light)';
    spacer2.style.background = 'var(--text-light)';

    //Seleciona y establece color light a todos los "a"
    document.querySelectorAll("a").forEach(a => {a.style.color = "var(--iconos-light)";});
    document.querySelectorAll("span").forEach(span => {span.style.color = "var(--iconos-light)";});
    caja.style.color = 'var(--iconos-light)';

     //Canviar color "desplegable"
      desplegableExperiencia.style.background = 'var(--fondo-light-modal)';
      desplegableContacto.style.background = 'var(--fondo-light-modal)';
  }
});


