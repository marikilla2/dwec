import * as All from "./utils.js";

console.log("--------------------------------------------------");

// Imprimir colecciones de nodos (NodeList)
console.log(All.getAllChipClass());
console.log(All.getAllParagraphs());
console.log(All.getAllListItems());
console.log(All.getAllOptionFromThemeSelect());

console.log("--------------------------------------------------");

// Recorrer e imprimir contenido de texto de las colecciones
All.getAllChipClass().forEach((value) => {
  console.log(value.textContent);
});

All.getAllParagraphs().forEach((value) => {
  console.log(value.textContent);
});

All.getAllListItems().forEach((value) => {
  console.log(value.textContent);
});

All.getAllOptionFromThemeSelect().forEach((value) => {
  console.log(value.textContent);
});

console.log("--------------------------------------------------");

// Elementos únicos: Se comprueba su existencia antes de acceder a su propiedad .value
const userEl = All.getUserFromForm();
if (userEl) console.log(userEl.value);

const mailEl = All.getMailFromForm();
if (mailEl) console.log(mailEl.value);

const bioEl = All.getTextArea();
if (bioEl) console.log(bioEl.value);

const themeOption = All.getThemeSelectedOption();
if (themeOption) console.log(themeOption.value);

const colorRadio = All.getColorSelectedRadio();
if (colorRadio) console.log(colorRadio.value);

console.log("--------------------------------------------------");

// Imprimir directamente los elementos únicos devueltos
console.log(All.getUserFromForm());
console.log(All.getMailFromForm());

// Colecciones (NodeList): SÍ se pueden recorrer con .forEach()
All.getAllColorRadios().forEach((value) => {
  console.log(value);
});

All.getAllCheckboxes().forEach((value) => {
  console.log(value);
});

All.getAllOptionsFromCursosSelect().forEach((value) => {
  console.log(value);
});

// Elementos únicos (querySelector): NO usan .forEach(), se imprimen directamente
console.log(All.getTextArea());
console.log(All.getThemeSelectedOption());
console.log(All.getColorSelectedRadio());
console.log(All.getCheckBoxSelected());

console.log("--------------------------------------------------");
