export const ej4 = () => {
  const contenedor = document.createElement("div");

  const campos = [
    { id: "nombre", texto: "Nombre", tipo: "text" },
    { id: "email", texto: "Correo electrónico", tipo: "email" },
    { id: "edad", texto: "Edad", tipo: "number" },
  ];

  campos.forEach((campo) => {
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = campo.texto;
    label.htmlFor = campo.id;

    const input = document.createElement("input");
    input.type = campo.tipo;
    input.id = campo.id;
    input.name = campo.id;

    div.append(label, input);
    contenedor.append(div);
  });

  return contenedor;
};
