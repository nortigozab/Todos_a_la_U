/**
 * !Ejercicio
 */
// Creación de buffers
console.log("---Creación de buffers---");
const buffer1 = Buffer.alloc(10); // Buffer vacío de 10 bytes
console.log(buffer1);

const buffer2 = Buffer.alloc(5, 1); // Buffer de 5 bytes llenos de valor 1
console.log(buffer2);

const buffer3 = Buffer.alloc(5, "a", "ascii"); // Buffer de 5 bytes llenos de caracteres "a"
console.log(buffer3);

const buffer4 = Buffer.from("Hola"); // Buffer a partir de una cadena
console.log(buffer4);

const buffer5 = Buffer.from(buffer3); // Buffer nuevo a partir de otro buffer
console.log(buffer5);

// Leer un buffer
console.log("\n---Leer un buffer---");
console.log(buffer4[0]); // Lectura de un byte individual
console.log(buffer4.toString()); // Lectura como string
console.log(buffer4.toString("hex")); // Lectura como hexadecimal
console.log(buffer4.toJSON()); // Lectura como JSON

// Modificar un buffer
console.log("\n---Modificar un buffer---");
buffer4[0] = 104; // Modificar un byte individual con el valor ASCII de "h"
console.log(buffer4.toString());

// Modificar cada byte de "saludoBufer" con la palabra "hello"
for (let i = 0; i < buffer4.length; i++) {
  buffer4[i] = "hello"[i]; // Asignar cada byte de "hello" al buffer
}
console.log(buffer4.toString());

/**
 * !Ejemplo
 */
/**
/Crear un buffer
console.log("---Creacion de buffer---");
//Objeto de buffer que hace referencia a un espacio en la memoria que almacena 1 KB (1024)
const primerBufer = Buffer.alloc(1024);
console.log(primerBufer);
//Objeto de buffer nuevo que hace referencia a un espacio en la memoria que almacena 1 KB de números 1
const buferLleno = Buffer.alloc(1024, 1);
console.log(buferLleno);
//Bufer nuevo de cinco bytes de longitud que almacene únicamente caracteres ASCII (el caracter a)
const asciiBufer = Buffer.alloc(5, "a", "ascii");
console.log(asciiBufer);
//FROM: búfer a partir de datos preexistentes como matrices, objetos, cadenas, otros buffer.
//Bufer a partir de una cadena
const stringBufer = Buffer.from("Mi nombre es Amparo");
console.log(stringBufer);
//Bufer nuevo a partir de otro bufer
const asciiCopy = Buffer.from(asciiBufer);
console.log(asciiCopy);
//bufer con un saludo
const saludoBufer = Buffer.from("Hola");

//leer un buffer
console.log("\n---Leer un buffer---");
//lectura individual de un byte
console.log(saludoBufer[0]);
//lectura de un byte que no esta definido (rango mayor al rango del buffer)
console.log(saludoBufer[4]);
//lectura como string
console.log(saludoBufer.toString());
//lectura como hexadecimal
console.log(saludoBufer.toString("hex"));
//lectura como json
console.log(saludoBufer.toJSON());
//bufer de string leido como string
console.log(stringBufer.toString());
//bufer de caracteres leido como string
console.log(asciiBufer.toString());

//Modificar un búfer
console.log("\n---modificar un buffer---");
//Caso 1: cambiar un byte individual
saludoBufer[1] = "e";
console.log(saludoBufer.toString());
//caso 2: cambiar un byte individual 'e' en su equivalente binario '101'
saludoBufer[1] = 101;
console.log(saludoBufer.toString());
//caso 3:
saludoBufer.write("Hi");
console.log(saludoBufer.toString());
//caso 4:
saludoBufer.write("saludo");
console.log(saludoBufer.toString());

 */
