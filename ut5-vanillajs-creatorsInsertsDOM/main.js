const h1 = document.createElement("h1");
h1.textContent = "The input min and max attributes";

const br = document.createElement("br");
const p = document.createElement("p");
p.textContent =
  "The min and max attributes specify the minimum and maximum values for an input element.";

const form = document.createElement("form");

//Los label no llevan otras propiedades como type, id, name, max
// porque son etiquetas y las etiquetas solo llevan contenido de texto

const label_datemax = document.createElement("label");

label_datemax.textContent = "Enter a date before 1980-01-01: ";

const label_datemin = document.createElement("label");

label_datemin.textContent = "Enter a date after 2000-01-01: ";

const label_quantity = document.createElement("label");

label_quantity.textContent = "Quantity (between 1 and 5): ";

//Los inputs en cambio normalmente llevan propiedades como id, type, max
// porque a través de ellos el usuario introduce datos por pantalla

const input_datemax = document.createElement("input");
input_datemax.id = "datemax";
input_datemax.type = "datemax";
input_datemax.max = "1979-12-31";

input_datemax.htmlFor = "datemax";
const input_datemin = document.createElement("input");
input_datemin.type = "date";
input_datemin.id = "datemin";
input_datemin.name = "datemin";
input_datemin.max = "2000-01-02";

input_datemin.htmlFor = "datemin";
const input_quantity = document.createElement("input");
input_quantity.type = "number";
input_quantity.id = "quantity";
input_quantity.name = "quantity";
input_quantity.min = "1";
input_quantity.max = "5";

input_quantity.htmlFor = "quantity";
const input_submit = document.createElement("input");
input_submit.type = "submit";
input_submit.value = "Submit";

//Aquí añadimos cada etiqueta, input y br para hacer cada componente del formulario

form.append(label_datemax, input_datemax, br, br.cloneNode());
form.append(label_datemin, input_datemin, br.cloneNode(), br.cloneNode());
form.append(label_quantity, input_quantity, br.cloneNode(), br.cloneNode());
form.append(input_submit);
