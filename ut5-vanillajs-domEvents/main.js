const boton1 = document.querySelector(".btn.btn-primary");
boton1.addEventListener("click", () => {
  alert("Click Event");
});

const boton2 = document.querySelector(".btn.btn-secondary");
boton2.addEventListener("mouseover", () => {
  alert("Mouse Enter Event");
});

const boton3 = document.querySelector(".btn.btn-success");
boton3.addEventListener("mouseup", () => {
  alert("Mouse Up Event");
});

const boton4 = document.querySelector(".btn.btn-danger");
boton4.addEventListener("mouseleave", () => {
  alert("Mouse Leave Event");
});

const boton5 = document.querySelector(".btn.btn-warning");
boton5.addEventListener("mouseover", () => {
  boton5.classList.remove("btn-warning");
  boton5.classList.add("btn-danger");
});

boton5.addEventListener("mouseleave", () => {
  boton5.classList.remove("btn-danger");
  boton5.classList.add("btn-warning");
});

const boton6 = document.querySelector(".btn.btn-info");
boton6.addEventListener("click", () => {
  boton6.style.backgroundColor = "red";
});

const boton7 = document.querySelector(".btn.btn-light");
boton7.addEventListener("click", () => {
  boton7.style.backgroundColor = "white";
});

//Este no lo entiendo, no sé hacerlo y no funciona
const boton8 = document.querySelector(".btn.btn-dark");

boton8.addEventListener("click", () => {
  const colores = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
  ];

  document.querySelectorAll(".btn").forEach((boton) => {
    boton.classList.remove(...colores); // quita la clase de color que tenga
    boton.classList.add("btn-dark"); // y le pone la oscura
    boton.style.backgroundColor = ""; // borra los colores puestos con style (botones 6 y 7)
  });
});
