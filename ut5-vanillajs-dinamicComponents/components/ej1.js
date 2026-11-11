export const ej1 = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Desarrollo Web en Entorno Cliente";
  h1.classList.add("ej1-titulo"); // ←

  const h2 = document.createElement("h2");
  h2.textContent = "Unidad 5: DOM";
  h2.classList.add("ej1-subtitulo"); // ←

  const p1 = document.createElement("p");
  p1.textContent = "Aprendemos a crear elementos HTML.";
  p1.classList.add("ej1-parrafo1"); // ←

  const p2 = document.createElement("p");
  p2.textContent = "Utilizaremos JavaScript para modificar el documento.";
  p2.classList.add("ej1-parrafo2"); // ←

  const container = document.createElement("div");
  container.classList.add("ej1-contenedor"); // ←
  container.append(h1, h2, p1, p2);
  return container;
};
