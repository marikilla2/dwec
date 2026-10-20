const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let array = [];
  for (let i = 0; i < persons.length; i++) {
    array.push(persons[i].name);
  }
  return array;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let array = [];
  let i = 0;
  do {
    array.push(persons[i].name);
    i++;
  } while (i < persons.length);
  return array;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let array = [];
  let i = 0;
  while (i < persons.length) {
    array.push(persons[i].name);
    i++;
  }
  return array;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let newArray = [];

  for (let i = 0; i < persons.length; i++) {
    newArray.push(persons[i].age);
  }
  return newArray;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let newArray = [];
  let i = 0;
  do {
    newArray.push(persons[i].age);
    i++;
  } while (i < persons.length);
  return newArray;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let newArray = [];
  let i = 0;
  while (i < persons.length) {
    newArray.push(persons[i].age);
    i++;
  }
  return newArray;
};
