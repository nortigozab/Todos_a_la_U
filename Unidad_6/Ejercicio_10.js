/**
 * !Ejercicio
 */

/**
 * *4. Según lo anterior haga un código que:
 *  *a. Tenga un objeto carro con las siguientes propiedades:
 *      *i.Marca.
 *      *ii.Modelo.
 *      *iii.Año.
 *      *iv.Color.
 *  *b. Agregue al objeto carro la función de descripción en la cual imprima lo siguiente:
 *      *“Hola! Mi marca es marca, soy modelo modelo año y mi color es color”
 *  *c. Imprima por consola cada una de las propiedades y funciones.
 */
const carro = {
  //Objeto mario
  //Propiedades
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2021,
  color: "Gris",

  descripcion: function () {
    console.log(
      "Hola! Mi marca es " +
        this.marca +
        ", soy modelo " +
        this.modelo +
        " " +
        this.ano +
        " y mi color es " +
        this.color
    );
  },
};
carro.descripcion();
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.color);
/**
 * !Ejemplo
 */
/*Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor*/

const persona = {
  //Definición del objeto persona
  //Definición de las propiedades
  nombre: "Beatriz",
  apellido: "Colón",
  edad: 39,
  soltera: true,
  //Se pueden agregar objetos dentro de objetos
  contacto: {
    email: "beatriz@example.com",
    tel: "+57 1234567890",
  },
  //Se pueden agregar funciones dentro de los objetos
  saludar: function () {
    console.log("Hola! :)");
  },
  llamar: function () {
    //this nos permite hacer referencia a la instancia actual
    console.log(`llamame al ${this.contacto.tel}`);
  },
};

/*Para acceder a una propiedad del objeto se hace de la siguiente manera
nombreObjeto.nombrePropiedad*/

console.log(
  `Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}, mi correo electronico es ${persona.contacto.email}`
);

//Para llamar la función dentro del objeto utilizamos el . tambien
persona.llamar();

/*Se pueden recorrer las propiedades de un objeto utilizando el ciclo for*/

console.log("-----------------Recorrer un objeto----------------------");

//For in: loop que permite recorrer las propiedades de un objeto

const mario = {
  //Objeto mario
  //Propiedades
  nombre: "Mario",
  apellido: "Mendoza",
  edad: 42,
};

//Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
  console.log(`Llave: ${key}, Valor: ${mario[key]}`);
}
