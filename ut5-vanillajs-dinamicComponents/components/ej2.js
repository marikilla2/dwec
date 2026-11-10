export const ej2 = () => {
  const perfil = document.createElement("div");
  perfil.id = "perfil";

  const titulo = document.createElement("h2");
  titulo.textContent = "Perfil de usuario";

  const nombre = document.createElement("p");
  nombre.textContent = "Nombre: Ana López";

  const estado = document.createElement("span");
  estado.textContent = "Activo";

  perfil.append(titulo, nombre, estado);
  return perfil;
};
