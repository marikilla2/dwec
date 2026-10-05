let estudiante = {
  nombre: "Ana",
  fecha_nac: "05-11-2000",
  esEstudiante: true,
  hobbies: ["leer", "tocar guitarra", "hacer deporte"],
  detalles_curso: {
    curso: "1ºASIR",
    clase: "B",
    nota_media: 7,
  },
  asignaturas: ["programacion", "base de datos"],
};

console.log("Keys: ");
console.log(Object.keys(estudiante));
console.log("Values: ");
console.log(Object.values(estudiante));

// let arrayClave = Object.entries(estudiante)[0][0];
// let arrayValor = Object.entries(estudiante)[4][1];
// console.log(arrayClave);
// console.log(arrayValor);
