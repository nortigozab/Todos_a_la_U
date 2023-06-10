/**
 * !Ejercicio
 */

/**
 * *    4. Según lo anterior haga un código que tenga un arreglo con los días de la semana y los asigne a
 * *    variables con la siguiente nomenclatura diaUno, …, diaSiete, imprima las variables por consola.
 */
const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
let diaUno = dias[0],
  diaDos = dias[1],
  diaTres = dias[2],
  diaCuatro = dias[3],
  diaCinco = dias[4],
  diaSeis = dias[5],
  diaSiente = dias[6];
console.log("-> Arreglo: " + dias);
console.log(
  "-> Variables: " + diaUno,
  diaDos,
  diaTres,
  diaCuatro,
  diaCinco,
  diaSeis,
  diaSiente
);
/**
 * *    5. Realice un código que cree un objeto mascota y tenga las siguientes propiedades
 * *        a. Nombre
 * *        b. Edad
 * *        c. Tamaño
 * *        d. Color
 * *    Asigne las propiedades a variables e imprimalos por consola.
 */

const mascota = {
  nom: "Luna",
  ed: 1,
  tamano: "Pequeña",
  color: "blanco y negro",
};
const { nom, ed, tamano, color } = mascota;

console.log("Mascota->", nom, ed, tamano, color);
/**
 * !Ejemplo
 */

/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------");

const numeros = [1, 2, 3];
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//Con destrucrturacion

console.log("--------------Con destructuración-------------------");

const [one, two, three] = numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one, two, three);

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona = {
  nombre: "Ana",
  apellido: "Santos",
  edad: 23,
};

const { nombre, apellido, edad } = persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre, apellido, edad);
