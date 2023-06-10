/**
 * ! Ejercicio
 */

// **Según lo anterior haga un código que dados tres números, evalúe cual es el número mayor. Imprimalos en consola ordenados.
let num1 = 4,
  num2 = 5,
  num3 = 37;
if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(
      num1 + " es el número mayor y el orden es: " + num3,
      num2,
      num1
    );
  } else {
    console.log(
      num1 + " es el número mayor y el orden  es: " + num2,
      num3,
      num1
    );
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(
      num2 + " es el número mayor y el orden es: " + num3,
      num1,
      num2
    );
  } else {
    console.log(num2 + " es el número mayor y el orden es" + num1, num3, num2);
  }
} else {
  if (num1 >= num2) {
    console.log(
      num3 + " es el número mayor y el orden es: " + num2,
      num1,
      num3
    );
  } else {
    console.log(
      num3 + " es el número mayor y el orden es: " + num1,
      num2,
      num3
    );
  }
}

// * Haga un código que evalúe si un número es par o impar
// *! lo hice con cndicional terniario
let numero = 6;
let par = numero % 2 == 0 ? numero + " es par" : numero + " es impar";
console.log(par);
/**
 * * Realice un código que resuelva el siguiente planeamiento:
 * * a. Una tienda comenzó una oferta para ventas al
 * *    i.20% Para compras mayores a 10 docenas.
 * *    ii.15% Para compras mayores o iguales a 5 docenas.
 * *    iii.10% Para compras mayores a 1 docena.
 * * Se desea determinar cuál es descuento dado una cantidad de decenas que se van a  comprar. Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000
 */
let compra = 1;
let valor = 60000 * compra;
if (compra > 10)
  console.log(
    "como son " +
      compra +
      " Docenas es descuento es del 20% y el total es: $" +
      (valor - valor * 0.2)
  );
else if (compra >= 5)
  console.log(
    "como son " +
      compra +
      " Docenas es descuento es del 15% y el total es: $" +
      (valor - valor * 0.15)
  );
else if (compra > 1)
  console.log(
    "como son " +
      compra +
      " Docenas es descuento es del 15% y el total es: $" +
      (valor - valor * 0.1)
  );
else if (compra == 1)
  console.log(
    "Como es " +
      compra +
      " Docena no tendra descuento por lo tanto el total es: " +
      valor
  );
else console.log("no pueden haber valores menores a 1");

/**
 * ! Ejemplo
 */
/*if/else
Permite que se realice una instrucción u otra de acuerdo a la evaluación de una condición. Su estructura es:
    if(condicion){
        instrucciones si la condición se cumple
    }else{
        instrucciones si la condición no se cumple
    }
En la condición se utilizan operadores de comparación.
*/

console.log("------------------------if/else---------------------------");
let edad = 26;

if (edad >= 18) {
  //Inicio de la condicion
  console.log("Eres mayor de edad, preparate:)"); //Instruccion si se cumple
} else {
  console.log("Eres menor de edad, disfruta tu vida:)"); //Instruccion si no se cumple.
}

/*Condiciones anidadas
Permite que se realice una instrucción u otra de acuerdo a la evaluación de varias condiciones. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else if (condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
*/

console.log("-----------------Condicional anidada----------------------");

let hora = 19;

/*Devuelve un saludo dependiendo la hora:
    -De 24 a las 05: Dejen dormir!
    -De 06 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora >= 0 && hora <= 5) {
  //Primera condición
  console.log("Dejen dormir!");
} else if (hora >= 6 && hora <= 11) {
  //Segunda condición
  console.log("Buenos días!");
} else if (hora >= 12 && hora <= 18) {
  //Tercera condición
  console.log("Buenas tardes!");
} else {
  console.log("Buenas noches!"); //Instruccion si no se cumple ninguna condición
}

/*Operador ternario
Se suelen usar para condicones simples con la siguiente estructura
    (condicion) ? InstruccionVerdadero : InstruccionFalso
Para entender mejor vea el siguiente ejemplo*/

console.log("-----------------Operador ternario----------------------");

let a = 8,
  b = 3;

let esMayor = a > b ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`;
console.log(esMayor);

/*Switch - Case
Estructura de control condicional que según una expresión evalua distintos posibles casos. Su sistaxis es:
    switch(expresion){
        case valor1:
            //instruccion
            break;
        case valor2:
            //instruccion 2
            break;
        default:
            //instruccion si ningun caso se cumple
            break;
    }
El siguiente ejmplo devuelve un día dependiendo un número dado
    0 Domingo
    1 Lunes
    2 Martes
    3 Miercoles
    4 Jueves
    5 Viernes
    6 Sabado*/

console.log("-----------------switch/case----------------------");

let dia = 3;

switch (dia) {
  case 0:
    console.log("El día es domingo");
    break;
  case 1:
    console.log("El día es lunes");
    break;
  case 2:
    console.log("El día es martes");
    break;
  case 3:
    console.log("El día es miercoles");
    break;
  case 4:
    console.log("El día es jueves");
    break;
  case 5:
    console.log("El día es viernes");
    break;
  case 6:
    console.log("El día essabado");
    break;

  default:
    console.log("el día no existe");
    break;
}
