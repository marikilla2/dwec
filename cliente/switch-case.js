const DEFAULT_DAY = "Número de día inválido";

/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */

let day = 2;
//Arrow function es igual que function(day){}
export const getDayOfWeekSC = (day) => {
    switch(day){
        case 1:
            return "Lunes";
            break;
        case 2:
            return "Martes";
            break;
        case 3:
            return "Miércoles";
            break;
        case 4:
            return "Jueves";
            break;
        case 5:
            return "Viernes";
            break;
        case 6:
            return "Sábado";
            break;
        case 7:
            return "Domingo";
            break;
        default:
            return DEFAULT_DAY;
    }
};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */

//Esto es como un diccionario con par clave-valor
let dayOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

/**
 * Crea una función que haga uso del objeto que has creado arriba y que además devuelva DEFAULT_DAY si se introduce
 * un valor fuera del rango 1 - 7
 *
 */

//Se podría haber hecho con un if-else (no lo va a exigir con operador ternario)
export const getDayOfWeekObject = (day) => {
    return dayOfWeek[day] || DEFAULT_DAY;
};

/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */

let num1 = 2;
let num2 = 5;

export const simpleCalculatorSC = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return DEFAULT_OPERARTOR_ERROR;
    }
};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */

//Cuatro opciones del objeto literal con función flecha (arrow function)
let calculatorObject = {
    
    "+": (num1, num2) => num1 + num2, //Equivale a function(num1,num2) {return num1 + num2};
    "-": (num1, num2) => num1 - num2, 
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2
};

/**
 * Crea una función que haga uso del objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */

//Se puede hacer también con un operador ternario
export const simpleCalculatorObject = (operator, num_1, num_2) => {
    if (calculatorObject[operator]) {
        return calculatorObject[operator](num_1, num_2);
    }

    return DEFAULT_OPERARTOR_ERROR;
};

/*
 *  return calculatorObject[operator] ? calculatorObject[operator](num1,num2) : DEFAULT_OPERARTOR_ERROR;
 */