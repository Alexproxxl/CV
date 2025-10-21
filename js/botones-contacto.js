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