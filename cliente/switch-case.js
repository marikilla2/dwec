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

let num = 2;
function diasSemana(num){
    switch(num){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log(DEFAULT_DAY);
    }
}
export const getDayOfWeekSC = (day) => {};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */
let dayOfWeek = {};

/**
 * Crea una función que haga uso del objeto que has creado arriba y que además devuelva DEFAULT_DAY si se introduce
 * un valor fuera del rango 1 - 7
 *
 */
export const getDayOfWeekObject = (day) => {};

/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */

let num1 = 2;
let num2 = 5;
function calculadoraBasica(num1, num2){
    switch(num1,num2){
        case 1:
            num1 + num2;
        case 2:
            num1 - num2;
        case 3:
            num1 * num2;
        case 4:
            num1 / num2;
    }
}

export const simpleCalculatorSC = (operartor, num_1, num_2) => {};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */
let calculatorObject = {};

/**
 * Crea una función que haga uso del objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */
export const simpleCalculatorObject = (operartor, num_1, num_2) => {};
