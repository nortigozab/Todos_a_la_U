/**
 * ! Ejercicio
 */

/**
 * *Según lo anterior haga un código que haga una función declarada para cada una de las siguientes
 * *operaciones:
 *  *a. Suma.
 *  *b. Resta.
 *  *c. Multiplicación.
 *  *d. División.
 */

function suma(a, b) {
  return console.log(a + "+" + b + "=" + (a + b));
}
function resta(a, b) {
  return console.log(a + "-" + b + "=" + (a - b));
}
function multiplicacion(a, b) {
  return console.log(a + "*" + b + "=" + a * b);
}
function dividir(a, b) {
  if (b > 0) return console.log(a + "/" + b + "=" + a / b);
  return console.log("No se puede dividir entre 0");
}

let a = 3;
let b = 5;
suma(a, b);
resta(a, b);
multiplicacion(a, b);
dividir(a, b);

/**
 * *Construir una función que convierta dólares a pesos colombianos y otra función que convierta pesos colombianos a dólares.
 */

function us_cop(us) {
  return console.log(us + "  usd a cop es: $" + (us * 4515.69).toFixed(2));
}
function cop_us(cop) {
  return console.log(cop + "  cop a usd es: $" + (cop / 4515.69).toFixed(2));
}

let us = 25;
let cop = 25000;
us_cop(us);
cop_us(cop);

/**
 * *Construir un código que tenga una función para cada uno de los siguientes cálculos:
 *      *a. Área de un cuadrado.
 *      *b. Área de un círculo.
 *      *c. Área de un triángulo.
 */

function area(a, b, c, d) {
  console.log("Area del cuadro con lado " + a + " : " + a * a);
  console.log("Area del Ciruclo con radio " + b + " : " + b * b * 3.14159);
  console.log(
    "Area del triangulo con base " + c + " y altura " + d + " : " + (c * d) / 2
  );
}

let cua = 4;
let radio = 3;
let base = 8,
  altura = 7;

area(cua, radio, base, altura);

/**
 * ! Ejemplo
 */

/**

/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------");

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

console.log("-----------------------------------------------------");

function saludar(nombre, edad) {
  return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones

console.log("-----------------------------------------------------");

function carrera(nombre = "desconocido", carrera = "desconocido") {
  return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`);
}

carrera("Juan", "desarrollo de web");
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion
