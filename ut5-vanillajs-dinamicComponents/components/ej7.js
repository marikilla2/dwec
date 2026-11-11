export const ej7 = () => {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("ej7-fieldset"); // ←

  const legend = document.createElement("legend");
  legend.textContent = "Turno de clase";
  legend.classList.add("ej7-leyenda"); // ←

  const opciones = document.createElement("div"); // ← nuevo: agrupa las 3 opciones
  opciones.classList.add("ej7-opciones"); // ←

  const turnos = [
    { valor: "manana", texto: "Mañana" },
    { valor: "tarde", texto: "Tarde" },
    { valor: "noche", texto: "Noche" },
  ];

  turnos.forEach((turno, indice) => {
    const div = document.createElement("div");
    div.classList.add("ej7-opcion"); // ←

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = turno.valor;
    radio.name = "turno";
    radio.value = turno.valor;

    if (indice === 0) {
      radio.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = turno.valor;
    label.textContent = turno.texto;

    div.append(radio, label);
    opciones.append(div); // ← antes era fieldset.append(div)
  });

  fieldset.append(legend, opciones); // ← la leyenda y después el grupo
  return fieldset;
};
