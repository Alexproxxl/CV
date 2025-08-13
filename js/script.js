

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
