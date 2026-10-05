
const estilo1 = "color: blue; font-size: 18px; font-weight: bold";

console.log("%cWelcome to the application", estilo1);

const estilo2 = "color: green; font-size: 16px";

console.log("%cThis is an informational message", estilo2);

const estilo3 = "color: yellow; font-size: 16px";

console.warn("%cThis is a warning. Be cautious", estilo3);

const estilo4 = "color: red; font-size: 16px";

console.error("%cError! Something went wrong", estilo4);

const datos = [
    {name: 'John', age: 30, city: 'New York'},
    {name: 'Jane', age: 25, city: 'San Francisco'},
    {name: 'Bob', age: 40, city: 'Chicago'}
];
console.table(datos);