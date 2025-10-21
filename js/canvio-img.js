/*export default function CambiarFoto(img){
    const src = img.getAttribute("src");
    console.log("0" + src)
  

  if(src.includes("light")){
    img.setAttribute("src", "img/foto-light.jpg");
    console.log("1" + src)
  }

  if(src.includes("dark")){
    img.setAttribute("src", "img/foto-dark.jpg");
    console.log("2" + src);
  }

  console.log(src)
}*/
export default function CambiarFoto(img) {
  const src = img.getAttribute("src");
  console.log("SRC actual:", src);

  if (src.includes("light")) {
    img.setAttribute("src", "img/foto-dark.jpg");
    console.log("→ cambiado a foto-dark.jpg");
  } else if (src.includes("dark")) {
    img.setAttribute("src", "img/foto-light.jpg");
    console.log("→ cambiado a foto-light.jpg");
  } else {
    console.warn("El nombre del archivo no contiene 'light' ni 'dark'");
  }
}
