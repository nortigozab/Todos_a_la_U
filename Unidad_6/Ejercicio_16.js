/**
 * !Ejercicio
 */
/**
 * *4. Según lo anterior haga un código reciba números con manejo de errores. Si el valor ingresado
 * *no es numérico debe enviar el mensaje:
 *      *“¡Cuidado! No se reciben datos no numéricos.”
 *      *Siempre al finalizar de ejecutar el código debe mostrar el mensaje:
 *      *“Análisis de datos terminado.”
 */
num = [3, 1, "4", 1, "2", 6];
try {
  num.forEach((element) => {
    console.log(element);
    if (isNaN(element)) {
      throw new Error("¡Cuidado! No se reciben datos no numéricos.");
    }
  });
} catch (error) {
  console.log(error);
} finally {
  console.log("Análisis de datos terminado.");
}

/**
 * *5. Realice un código que realice una calculadora científica con las siguientes operaciones:
 *      *a. Suma
 *      *b. Resta
 *      *c. Multiplicación
 *      *d. División.
 *      *e. Potencia.
 *      *f. Raíz cuadrada.
 *  *Que tenga manejos de errores para las operaciones teniendo en cuenta que:
 *      *-La división por cero no es posible.
 *      *-La calculadora solo acepta entradas numéricas.
 *      *-No es posible la raíz cuadrada de números negativos.
 */

function calculadora(o, a, b) {
  try {
    if (isNaN(a) || isNaN(b))
      throw new Error("Uno de los datos no es numerico");
    switch (o) {
      case "1":
        return "Suma: " + (a + b);
      case "2":
        return "Resta: " + (a - b);
      case "3":
        return "Multiplicacion: " + a * b;
      case "4":
        if (b == 0) throw new Error("No se puede Dividir en 0");
        else return "Division: " + a / b;
      case "5":
        return "Potencia: " + a ** b;
      case "6":
        if (a < 0)
          throw new Error(
            "No se puede hacer raiz de " + a + " por que es negativo"
          );
        else return "Raiz " + b + " de " + a + ": " + a ** (1 / b);
        break;
      default:
        throw new Error(o + " No es una opcion");
    }
  } catch (error) {
    return error;
  }
}

console.log(calculadora("1", "1", "3"));
console.log(calculadora("2", 2, 3));
console.log(calculadora("3", 2, 3));
console.log(calculadora("4", 2, 5));
console.log(calculadora("5", 2, 3));
console.log(calculadora("6", 4, 2));

/**
 * !Ejemplo
 */

/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------");

try {
  //Si no hay ningun error se ejecuta el bloque try
  console.log("Inicio");
  let suma = 15 + 99;
  console.log(`El resultado es ${suma}`);
} catch (err) {
  //Si encuentra un error ejecuta el siguiente codigo
  console.log("Hay un error!");
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------");

try {
  console.log("Inicio");
  let suma = 15 + 99;
  console.log(`El resultado es ${resultado}`);
  //Variable resultado no definida
} catch (err) {
  console.log("Hay un error!");
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------");

try {
  console.log("En el try se agrega el codigo a evaluar");
  noExiste; //genera un error porque noExiste no esta definida
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch captura cualquier error que surga en el try");
  console.log(error); //imprime el error
} finally {
  console.log("Finally se ejecuta siempre al final de un bloque try-catch");
}

//Personalizacion de mensajes de error

console.log(
  "-----------------Personalización mensajes de error----------------------"
);

try {
  let numero = "y";
  if (isNaN(numero)) {
    //El metodo isNaN() evalua si la variable es de tipo numererico o no
    //Definición del nuevo mensaje de error  throw new Error()
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente ${error}`);
}
