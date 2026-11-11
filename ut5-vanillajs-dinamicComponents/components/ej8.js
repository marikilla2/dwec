export const ej8 = () => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("ej8-contenedor"); // ←

  const tecnologias = [
    { valor: "html", texto: "HTML" },
    { valor: "css", texto: "CSS" },
    { valor: "javascript", texto: "JavaScript" },
    { valor: "typescript", texto: "TypeScript" },
  ];

  tecnologias.forEach((tecnologia, indice) => {
    const div = document.createElement("div");
    div.classList.add("ej8-opcion"); // ←

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = tecnologia.valor;
    checkbox.name = "tecnologias";
    checkbox.value = tecnologia.valor;

    checkbox.checked = indice < 2;

    const label = document.createElement("label");
    label.htmlFor = tecnologia.valor;
    label.textContent = tecnologia.texto;

    div.append(checkbox, label);
    contenedor.append(div);
  });

  return contenedor;
};
