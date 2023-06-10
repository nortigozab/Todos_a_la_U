/**
 * !Ejercicio
 */
/**
 *  *Según lo anterior haga un código que:
 *    *  a. Imprima los números del 10 al 1.
 *     * b. Imprima los números pares.
 */
//*a)
for (let i = 10; i > 0; i--) {
  console.log(` ${i}`);
}
//*b)
for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) console.log(` ${i}`);
}

// * Realice un código que sume los números del 1 al 5 e imprima el resultado.
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("La sum total del 1 al 5 es: " + sum);

//* Haga un código con while que imprima la tabla de multiplicar del 7

let tabla = 1;
while (tabla != 13) {
  console.log("7X" + tabla + "= " + tabla * 7);
  tabla++;
}
/**
 * !Ejemplo
 */

/*While.
Permite ejecutar un código mientras se cumpla una condición.
Como se ve a continuación*/

console.log("-----------------Condicional while----------------------");

let cont = 0;

/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while (cont < 10) {
  console.log(`El while va en ${cont}`);
  cont++;
}

/*For
Permite ejecutar un código un número determinado de veces.
Como se ve a continuación*/

/*La variable i aumenta de uno en uno siempre que sea mejor que 10*/

console.log("-----------------Condicional for----------------------");

for (let i = 0; i < 10; i++) {
  console.log(`El for va en ${i}`);
}
