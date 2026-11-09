import * as All from "./utils.js";

// 1. Imprimir los elementos recuperados (primera captura)
console.log(All.getAllChipClass());
console.log(All.getAllParagraphs());
console.log(All.getAllListItems());
console.log(All.getAllOptionFromThemeSelect());
console.log(All.getUserFromForm());
console.log(All.getMailFromForm());
console.log(All.getAllColorRadios());
console.log(All.getAllCheckboxes());
console.log(All.getAllOptionsFromCursosSelect());
console.log(All.getTextArea());

console.log("--------------------------------------------------");

// 2. Textos de chips, párrafos y elementos de lista
console.log("Mostrar todos los textos de los elementos con clase Chip....");
All.getAllChipClass().forEach((chip) => console.log(chip.textContent));

console.log("Mostrar todos los textos de los párrafos....");
All.getAllParagraphs().forEach((p) => console.log(p.textContent));

console.log("Mostrar todos los textos de los elementos de lista....");
All.getAllListItems().forEach((li) => console.log(li.textContent));

// 3. Select de temas: value -> texto visible
console.log("Mostrar todas las opciones del select de temas....");
All.getAllOptionFromThemeSelect().forEach((option) =>
  console.log(`${option.value} -> ${option.textContent}`),
);

console.log("Mostrar la opción seleccionada del select de temas....");
const themeOption = All.getThemeSelectedOption();
console.log(themeOption.value, " -> ", themeOption.textContent);

// 4. Inputs de texto: se leen con .value
console.log("Mostrar el valor de los campos de usuario y correo....");
console.log(All.getUserFromForm().value);
console.log(All.getMailFromForm().value);

// 5. Radios y checkboxes: se leen con .checked
console.log("Mostrar todos los radios de colores....");
All.getAllColorRadios().forEach((radio) =>
  console.log(`${radio.value} -> ${radio.checked}`),
);

console.log("Mostrar el radio seleccionado de colores....");
console.log(All.getColorSelectedRadio().value);

console.log("mostrar todos los checkboxes....");
All.getAllCheckboxes().forEach((check) =>
  console.log(`${check.value} -> ${check.checked}`),
);

console.log("mostrar el checkbox seleccionado....");
console.log(All.getCheckBoxSelected().value);

// 6. Select de cursos
console.log("mostrar todas las opciones del select de cursos....");
All.getAllOptionsFromCursosSelect().forEach((option) =>
  console.log(`${option.value} -> ${option.textContent}`),
);

// 7. Textarea: está vacío, lo que se ve es el placeholder
console.log("Mostrar el contenido del textarea....");
console.log(All.getTextArea().placeholder);
