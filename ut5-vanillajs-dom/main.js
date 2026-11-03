import * as All from "./utils.js";

console.log("--------------------------------------------------");

console.log(All.getAllChipClass());

console.log(All.getAllParagraphs());

console.log(All.getAllListItems());

console.log(All.getAllOptionFromThemeSelect());

console.log("--------------------------------------------------");

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

// Estos dos no se pueden hacer porque devuelven un solo valor
// All.getUserFromForm().forEach((value) => {
//   console.log(value);
// });

// All.getMailFromForm().forEach((value) => {
//   console.log(value);
// });

//Una forma de hacerlo para que funcionen algunas funciones

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

//A partir de aquí no sale como debería

console.log(All.getUserFromForm());

console.log(All.getMailFromForm());

All.getAllColorRadios().forEach((value) => {
  console.log(value);
});

All.getAllCheckboxes().forEach((value) => {
  console.log(value);
});

All.getAllOptionsFromCursosSelect().forEach((value) => {
  console.log(value);
});

All.getTextArea().forEach((value) => {
  console.log(value);
});

All.getThemeSelectedOption().forEach((value) => {
  console.log(value);
});

All.getColorSelectedRadio().forEach((value) => {
  console.log(value);
});

All.getCheckBoxSelected().forEach((value) => {
  console.log(value);
});

console.log("--------------------------------------------------");
