;

 console.log("Responsive por lo menos ejecutas?");

// Función que verifica el ancho y aplica la clase
export default function checkResolution() {
    const main = document.querySelector(".main")
  const width = window.innerWidth;

  if (width < 720) {
    main.classList.add("expand");
  } else if(main.classList.contains("expand")){

    main.classList.remove("expand");
  }

  console.log("Responsive funcionando");
}
// Ejecutar la comprobación al cargar la página
// Ejecutar la comprobación cada vez que se cambia el tamaño de la ventana
