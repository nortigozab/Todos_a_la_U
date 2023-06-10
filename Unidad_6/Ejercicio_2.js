var pelicula = "Interestelar";
console.log("Variable película antes del bloque:", pelicula);
let musica = "Rock";
console.log("Variable música antes del bloque:", musica);
{
  var pelicula = "Matilda";
  console.log("Variable película en el bloque:", pelicula);

  let musica = "Salsa";
  console.log("Variable música en el bloque:", musica);
}

console.log("Variable película despues del bloque:", pelicula);
console.log("Variable música despues del bloque:", musica);

/**
 * ! ejercicio solicitado
 * ? variable nombre, apellido y comida como globales y edad como local
 */

var nombre = "Carlos";
var apellido = "Torres";

let edad = "28";
let comida = "pasta";

{
  let edad = "25";
  console.log("la variable global se puede leer aqui", nombre);
  console.log("la variable global se puede leer aqui", edad);
}

console.log("la variable local NO se puede leer aqui", edad);
