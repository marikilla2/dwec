export const ej3 = () => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("ej3-contenedor"); // ←

  const botones = [
    { id: "guardar", texto: "Guardar" },
    { id: "cancelar", texto: "Cancelar" },
    { id: "eliminar", texto: "Eliminar" },
  ];

  botones.forEach((datos) => {
    const boton = document.createElement("button");

    boton.id = datos.id;
    boton.type = "button";
    boton.textContent = datos.texto;
    boton.classList.add("ej3-boton", `ej3-${datos.id}`); // ← la común + la de su color

    contenedor.append(boton);
  });

  return contenedor;
};
