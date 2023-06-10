/**
 * !Ejercicio
 */

/**
 * *Según lo anterior haga un código que con funciones expresadas haga una función relacion(a, b)
 * *que a partir de dos números cumpla lo siguiente:
 *      *a. Si el primer número es mayor que el segundo, debe devolver 1.
 *      *b. Si el primer número es menor que el segundo, debe devolver -1.
 *      *c. Si ambos números son iguales, debe devolver un 0.
 */

relacion = function (a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
let a = 4,
  b = 0;
console.log(relacion(a, b));

/**
 * *Realizar un código con funciones anónimas autoejecutables realice un algoritmo que diga si un
 * *número entero positivo es par o no. Utilice la operación módulo.
 */

(function par(a) {
  let par =
    a > 0 ? (a % 2 == 0 ? a + " Es par" : a + " No es par") : "No es Positivo";
  console.log(par);
})(24);

/**
 * !Ejemplo
 */

/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
  return console.log("Esta es una función expresada!");
};

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function () {
  console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c) {
  c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);
