export const ej1 = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Desarrollo Web en Entorno Cliente";

  const h2 = document.createElement("h2");
  h2.textContent = "Unidad 5: DOM";

  const p1 = document.createElement("p");
  p1.textContent = "Aprendemos a crear elementos HTML.";

  const p2 = document.createElement("p");
  p2.textContent = "Utilizaremos JavaScript para modificar el documento.";

  const container = document.createElement("div");
  container.append(h1, h2, p1, p2);
  return container;
};
