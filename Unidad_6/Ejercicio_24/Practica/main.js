console.log("-----------------Métodos----------------------");
/**
 * *a. Muestre por consola el HTML de la etiqueta H1.
 */
console.log($("H1").html()); //Método que muesta el contenido HTML de un elemento
/**
 * *b. Compruebe si dentro del elemento li hay una clase llamada “elemento9”. Imprima el resultado por consola.
 */
console.log($("li").hasClass("elemento9"));
/**
 * *c. Inserte el siguiente código HTML debajo de la etiqueta H1 y agregale por medio del método addClass() la clase “subtitulo”
 * !<h2>Dominando métodos jQuery</h2>
 */
$("<h2>Dominando métodos jQuery</h2>").insertAfter("H1");
$("H2").addClass("subtitulo");

/**
 * *d. Clone el párrafo, muestrelo después de la lista y asígnele por medio del método attr() la clase “segundo”.
 */
$("p").clone().insertAfter("ul").attr("class", "segundo");
/**
 * *e. Con el evento click realice sobre el mismo código una lógica que permite ocultar y mostrar elementos de la lista.
 */
$("<button class='esconder'>Esconder</button>").insertAfter(".segundo");
$("<button class='mostrar'>Mostrar</button>").insertAfter(".esconder");
$(".esconder").click(function () {
  //Evento click realiza una accion al dar click en el elemento.
  $(".elemento1").hide(); //Metodo qee esconde elemento seleccionado
  $(".elemento3").hide(); //Metodo qee esconde elemento seleccionado
  $(".elemento5").hide(); //Metodo qee esconde elemento seleccionado
  $(".elemento7").hide(); //Metodo qee esconde elemento seleccionado
});
$(".mostrar").click(function () {
  //Evento click realiza una accion al dar click en el elemento.
  $(".elemento1").show(); //Metodo qee muestra elemento seleccionado
  $(".elemento3").show(); //Metodo qee muestra elemento seleccionado
  $(".elemento5").show(); //Metodo qee muestra elemento seleccionado
  $(".elemento7").show(); //Metodo qee muestra elemento seleccionado
});
