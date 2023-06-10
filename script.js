function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a img
  if (html.classList.contains("light")) {
    //substituir light mode, adicionar a imagem light
    img.setAttribute("src", "assets/fabiolight.png")
    img.setAttribute("alt", "Foto Fabio Avatar Camisa Amarela")
  } else {
    //se tiver light mode, manter a img normal
    img.setAttribute("src", "assets/fabio5.png")
    img.setAttribute("alt", "Foto Fabio Avatar Camisa Azul")
  }
}
