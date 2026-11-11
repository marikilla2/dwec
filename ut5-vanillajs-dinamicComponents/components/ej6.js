export const ej6 = () => {
  const label = document.createElement("label");
  label.textContent = "Lenguaje de programación";
  label.htmlFor = "lenguaje";
  label.classList.add("ej6-etiqueta"); // ←

  const select = document.createElement("select");
  select.id = "lenguaje";
  select.name = "lenguaje";
  select.classList.add("ej6-selector"); // ←

  const lenguajes = [
    { valor: "", texto: "Selecciona un lenguaje" },
    { valor: "js", texto: "JavaScript" },
    { valor: "python", texto: "Python" },
    { valor: "java", texto: "Java" },
    { valor: "php", texto: "PHP" },
  ];

  lenguajes.forEach((lenguaje, indice) => {
    const option = document.createElement("option");

    option.value = lenguaje.valor;
    option.textContent = lenguaje.texto;

    if (indice === 0) {
      option.disabled = true;
      option.selected = true;
    }

    select.append(option);
  });

  const container = document.createElement("div");
  container.classList.add("ej6-contenedor"); // ←
  container.append(label, select);
  return container;
};
