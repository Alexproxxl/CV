var botonInfo = document.getElementById("info-contacto");
var cardContacto = document.getElementById("card-contacto");

// Asociar la función al botón
botonInfo.addEventListener('click', contacto);

cardContacto.addEventListener('click', salir);

function contacto() {
    var info = document.getElementById('card-contacto');
    var cardGeneral = document.getElementById('card-general');
    cardGeneral.style.filter = 'blur(5px)';
    info.style.display = 'block';
    console.log('Botón clickeado');
}

function salir() {
    var info = document.getElementById('card-contacto');
    var cardGeneral = document.getElementById('card-general');
    info.style.display = "none";
    cardGeneral.style.filter = 'blur(0)';
    console.log('Que esta pasando aquí?');
}
