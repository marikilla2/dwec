export const ej9 = () => {
  const tecnologias = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"];

  const titulo = document.createElement("h2");
  titulo.textContent = "Tecnologías web";
  titulo.classList.add("ej9-titulo"); // ←

  const ul = document.createElement("ul");
  ul.classList.add("ej9-lista"); // ←

  tecnologias.forEach((tecnologia) => {
    const li = document.createElement("li");
    li.textContent = tecnologia;
    li.classList.add("ej9-tecnologia"); // ←
    ul.append(li);
  });

  const container = document.createElement("div");
  container.append(titulo, ul);
  return container;
};
