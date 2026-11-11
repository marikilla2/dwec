export const ej5 = () => {
  const label = document.createElement("label");
  label.textContent = "Observaciones";
  label.htmlFor = "observaciones";
  label.classList.add("ej5-etiqueta"); // ←

  const textarea = document.createElement("textarea");
  textarea.id = "observaciones";
  textarea.name = "observaciones";
  textarea.rows = 5;
  textarea.cols = 40;
  textarea.placeholder = "Introduce tus observaciones...";
  textarea.value = "Escribe tus observaciones aquí...";
  textarea.classList.add("ej5-textarea"); // ←

  const container = document.createElement("div");
  container.classList.add("ej5-contenedor"); // ←
  container.append(label, textarea);
  return container;
};
