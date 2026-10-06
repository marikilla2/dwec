const TITULO = document.getElementById("titulo");

console.log(TITULO.textContent, "-> get via getElementById");

const PARRAFO1 = document.getElementsByClassName("parrafo");

console.log(PARRAFO1[0].textContent, "-> get via getElementsByClassName");
console.log(PARRAFO1[1].textContent, "-> get via getElementsByClassName");

/*
for (let p of PARRAFO1){
    console.log(PARRAFO1.textContent, "-> get via getElementsByClassName");
}
*/

const NOMBRE = document.getElementsByName("nombre");

console.log(NOMBRE[0].placeholder, "-> get via getElementsByName");

const APELLIDO = document.getElementsByName("apellido");

console.log(APELLIDO[0].placeholder, "-> get via getElementsById");

const ELEMENTOS = document.getElementsByTagName("li");

console.log(ELEMENTOS[0].textContent, "-> get via getElementsByTagName");
console.log(ELEMENTOS[1].textContent, "-> get via getElementsByTagName");
console.log(ELEMENTOS[2].textContent, "-> get via getElementsByTagName");

/*
Array.from(li).forEach((item) =>
    console.log(item.textContent, "-> get via getElementsByTagName"));
*/

const TITULONUEVO = document.querySelector("#titulo");

console.log(TITULONUEVO.textContent, "-> get via querySelector");

const PARRAFOS = document.querySelectorAll(".parrafo");

console.log(PARRAFOS[0].textContent, "-> get via querySelectorAll");
console.log(PARRAFOS[1].textContent, "-> get via querySelectorAll");

/*
Array.from(PARRAFOS).forEach(p) =>
    console.log(p.textContent, "-> get via querySelectorAll");
*/
