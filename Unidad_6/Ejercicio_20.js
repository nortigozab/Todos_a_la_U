/**
 * !Ejercicio
 */

const personales = `{
  "nombre": "Mariana",
  "edad": 36
}`;

/**
 * *    4. Según lo anterior haga un código que:
 * *        a. Reciba los datos personales (nombre, apellido, correo, teléfono, nacionalidad) de 5
 * *        usuarios en objetos y los pase a formato JSON. Imprima tanto los objetos como los JSON generados.
 * *        b. Reciba un JSON con información de sus 5 películas favoritas y pase esta información a
 * *        objetos. Imprima los JSON y los objetos generados.
 */

/**
 * *a.
 */
const usuarios = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan@example.com",
    telefono: "123456789",
    nacionalidad: "Mexicana",
  },
  {
    nombre: "María",
    apellido: "Gómez",
    correo: "maria@example.com",
    telefono: "987654321",
    nacionalidad: "Colombiana",
  },
  {
    nombre: "Luis",
    apellido: "González",
    correo: "luis@example.com",
    telefono: "456789123",
    nacionalidad: "Argentina",
  },
  {
    nombre: "Ana",
    apellido: "López",
    correo: "ana@example.com",
    telefono: "321654987",
    nacionalidad: "Española",
  },
  {
    nombre: "Carlos",
    apellido: "Martínez",
    correo: "carlos@example.com",
    telefono: "987123654",
    nacionalidad: "Chilena",
  },
];

// Convertir los objetos a formato JSON
const jsonUsuarios = JSON.stringify(usuarios);

// Imprimir los objetos y los JSON generados
console.log("Objetos de usuarios:");
console.log(usuarios);
console.log(typeof usuarios);
console.log("\nJSON de usuarios:");
console.log(jsonUsuarios);
console.log(typeof jsonUsuarios);
/**
 * *b.
 */
const jsonPeliculas = `
{
  "peliculas": [
    {
      "titulo": "El Padrino",
      "director": "Francis Ford Coppola",
      "anio": 1972
    },
    {
      "titulo": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "anio": 1994
    },
    {
      "titulo": "El Señor de los Anillos: El Retorno del Rey",
      "director": "Peter Jackson",
      "anio": 2003
    },
    {
      "titulo": "Origen",
      "director": "Christopher Nolan",
      "anio": 2010
    },
    {
      "titulo": "La La Land",
      "director": "Damien Chazelle",
      "anio": 2016
    }
  ]
}
`;
const peliculas = JSON.parse(jsonPeliculas);

console.log("Objetos de películas:");
console.log(peliculas);

console.log("\nJSON de películas:");
console.log(jsonPeliculas);

/**
 * !Ejemplo
 */
/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------");

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`); //Impresión del objeto

console.log("-----------Conversión de un Objeto a JSON----------------");

//Objeto persona
const persona = {
  nombre: "Mariana",
  edad: 36,
  amigos: ["Juan", "Fernanda", "José"],
};

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona); //Impresion del json
