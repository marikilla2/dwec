export const ej3 = () => {
  const contenedor = document.createElement("div");

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

    contenedor.append(boton);
  });

  return contenedor;
};
