import { ej1 } from "./components/ej1.js";
import { ej2 } from "./components/ej2.js";
import { ej3 } from "./components/ej3.js";
import { ej4 } from "./components/ej4.js";
import { ej5 } from "./components/ej5.js";
import { ej6 } from "./components/ej6.js";
import { ej7 } from "./components/ej7.js";
import { ej8 } from "./components/ej8.js";
import { ej9 } from "./components/ej9.js";
import { ej10 } from "./components/ej10.js";

const app = document.querySelector("#app");

const ejercicios = [ej1, ej2, ej3, ej4, ej5, ej6, ej7, ej8, ej9, ej10];

ejercicios.forEach((ejercicio) => {
  app.append(ejercicio());
});
