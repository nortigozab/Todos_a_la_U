console.log(
  "----------------------------FUNCIONES----------------------------------------"
);
function saluda(nombre, edad) {
  return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
}

console.log(saluda("Amparo", 39));

//arreglos

console.log(
  "----------------------------ARREGLOS-----------------------------------------"
);

const a = []; //Arreglo vacio

const b = [1, 2, 3, 4]; //Arreglo can 4 elementos

const c = [1, true, "Hola", ["A", "B", "c"]]; //Arreglo nixto

const d = new Array("a", "b", "c"); //Arreglo creando con una instancia de Array

console.log(a);

console.log(b);

console.log(c);

console.log(d);

console.log(
  "----------------------------Exportacion-----------------------------------------"
);
const saludo = require("./saludos.js");
console.log(saludo.saludar("amparo", 38));
console.log(saludo.saludarHolaMundo());

console.log(
  "----------------------------Exportacion Class-----------------------------------------"
);
const { saludito } = require("./saludos");
//primer saludo
const primerSaludo = new saludito("Mi primer saludo");
console.log(primerSaludo.saludar("Amparo", 39));
console.log(primerSaludo.saludarHolaMundo());
console.log("--------------------------------------");
//segundo saludo
const segundoSaludo = new saludito("Mi segundo saludo");
console.log(segundoSaludo.saludar("Amparo", 39));
console.log(segundoSaludo.saludarHolaMundo());
