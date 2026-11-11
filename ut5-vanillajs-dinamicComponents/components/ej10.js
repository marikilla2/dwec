export const ej10 = () => {
  const cursos = [
    { nombre: "JavaScript", duracion: 30 },
    { nombre: "TypeScript", duracion: 20 },
    { nombre: "Angular", duracion: 40 },
  ];

  const titulo = document.createElement("h2");
  titulo.textContent = "Cursos disponibles";
  titulo.classList.add("ej10-titulo"); // ←

  const ol = document.createElement("ol");
  ol.classList.add("ej10-lista"); // ←

  cursos.forEach((curso) => {
    const li = document.createElement("li");
    li.classList.add("ej10-curso"); // ←

    const nombre = document.createElement("strong");
    nombre.textContent = curso.nombre;
    nombre.classList.add("ej10-nombre"); // ←

    const duracion = document.createElement("span");
    duracion.textContent = `${curso.duracion} horas`;
    duracion.classList.add("ej10-duracion"); // ←

    li.append(nombre, duracion);
    ol.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ol);
  return container;
};
