export const ej10 = () => {
  const cursos = [
    { nombre: "JavaScript", duracion: 30 },
    { nombre: "TypeScript", duracion: 20 },
    { nombre: "Angular", duracion: 40 },
  ];

  const titulo = document.createElement("h2");
  titulo.textContent = "Cursos disponibles";

  const ol = document.createElement("ol");

  cursos.forEach((curso) => {
    const li = document.createElement("li");

    const nombre = document.createElement("strong");
    nombre.textContent = curso.nombre;

    const duracion = document.createElement("span");
    duracion.textContent = `${curso.duracion} horas`;

    li.append(nombre, duracion);
    ol.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ol);
  return container;
};
