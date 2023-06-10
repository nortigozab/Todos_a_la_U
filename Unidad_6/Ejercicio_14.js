/**
 * !ejercicios
 */

/**
 * *4. Según lo anterior haga un código que por medio de un ciclo llene un arreglo con los números
 * *del 1 al 100 en imprimalo en pantalla
 */
let num = [];
for (let i = 1; i <= 100; i++) {
  num.push(i);
}
num.forEach((n) => console.log(n));
/**
 * *5. aga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla.
 */
let pares = [];
num.forEach((n) => {
  if (n % 2 == 0) pares.push(n);
});
pares.forEach((p) => console.log(p));
/**
 * *6. Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.
 */
let bur = [7, 5, 1];
bur.sort((a, b) => a - b);
console.log(bur);
/**
 * !ejemplo
 */
/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------");
const a = Array(100).fill(false);
console.log(a);

const colores = ["Rojo", "Azul", "Gris"];
console.log(colores);

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------");
colores.push("Verde");
console.log(colores);

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------");
colores.pop();
console.log(colores);

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------");
const copiaColores = colores.slice();
console.log(copiaColores);

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------");
console.log(colores.length);
