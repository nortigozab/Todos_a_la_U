/**
 * ! Ejercicio 22
 */
const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
  $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
  $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => {
  if (ajax.readyState !== 4) return;

  if (ajax.status >= 200 && ajax.status < 300) {
    //Si la respuesta es satisfactoria
    let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

    for (const key in json) {
      //recorre el objeto
      console.log(`Llave: ${key}, Valor: ${json[key]}`);
      const $li = document.createElement("li"); //Crea el elemento li
      $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
      $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
    }
    $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
  } else {
    //Si la respuesta no es satisfactoria manda un mensaje de error
    let message = ajax.statusText || "Ocurrió un error";
    $lista.innerHTML = `Error ${ajax.status}: ${message}`;
  }
  console.log("................Respuestas..............");
  console.log(ajax.responseText);
  console.log("................URL..............");
  console.log(ajax.responseURL);
  console.log("................Estado..............");
  switch (ajax.readyState) {
    case 1:
      console.log("Cargando petición");
      break;
    case 2:
      console.log("Petición cargada");
      break;
    case 3:
      console.log("responseText tiene datos parciales");
      break;
    case 4:
      console.log("¡Completado!");
      break;
  }
  console.log("................HTTP..............");
  if (ajax.status === 200) {
    console.log("respuesta correcta");
  } else if (ajax.status === 404) {
    console.log("no encontrado.");
  } else if (ajax.status === 505) {
    console.log("error interno del servidor");
  } else {
    console.log("error desconocido");
  }
});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/26");
/*envia la peticioN*/
ajax.send();

/**
 * ! Ejercicio 23-1
 */

const ajax1 = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
  $lista1 = document.getElementById("lista1"), //variable que hace referencia al nodo ol del HTML id="lista"
  $fragmento1 = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

ajax1.addEventListener("readystatechange", (e) => {
  if (ajax1.readyState !== 4) return;

  if (ajax1.status >= 200 && ajax1.status < 300) {
    //Si la respuesta es satisfactoria
    let json = JSON.parse(ajax1.responseText); //Convierte la respuesta Ajax en un objeto

    for (const key in json) {
      //recorre el objeto
      console.log(`Llave: ${key}, Valor: ${json[key]}`);
      const $li = document.createElement("li"); //Crea el elemento li
      $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
      $fragmento1.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
    }
    $lista1.appendChild($fragmento1); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
  } else {
    //Si la respuesta no es satisfactoria manda un mensaje de error
    let message = ajax1.statusText || "Ocurrió un error";
    $lista1.innerHTML = `Error ${ajax1.status}: ${message}`;
  }
  console.log("................Respuestas..............");
  console.log(ajax1.responseText);
  console.log("................URL..............");
  console.log(ajax1.responseURL);
  console.log("................Estado..............");
  switch (ajax1.readyState) {
    case 1:
      console.log("Cargando petición");
      break;
    case 2:
      console.log("Petición cargada");
      break;
    case 3:
      console.log("responseText tiene datos parciales");
      break;
    case 4:
      console.log("¡Completado!");
      break;
  }
  console.log("................HTTP..............");
  if (ajax1.status === 200) {
    console.log("respuesta correcta");
  } else if (ajax1.status === 404) {
    console.log("no encontrado.");
  } else if (ajax1.status === 505) {
    console.log("error interno del servidor");
  } else {
    console.log("error desconocido");
  }
});

/*Abre la petición con el método GET.*/
ajax1.open("GET", " https://jsonplaceholder.typicode.com/comments/63");
/*envia la peticioN*/
ajax1.send();

/**
 * ! Ejercicio 23-2
 */
const ajax2 = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
  $lista2 = document.getElementById("lista2"), //variable que hace referencia al nodo ol del HTML id="lista"
  $fragmento2 = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

ajax2.addEventListener("readystatechange", (e) => {
  if (ajax2.readyState !== 4) return;

  if (ajax2.status >= 200 && ajax2.status < 300) {
    // Si la respuesta es satisfactoria
    let json = JSON.parse(ajax2.responseText); // Convierte la respuesta Ajax en un objeto

    const $fragmento2 = document.createDocumentFragment(); // Crea un fragmento para almacenar los elementos li

    Object.keys(json).forEach((key, index) => {
      // Recorre las claves del objeto
      const elemento = json[key];
      console.log(`Llave: ${key}, Valor: ${elemento}`);
      const $li = document.createElement("li"); // Crea el elemento li
      $li.textContent = ` ${elemento.name} -- ${elemento.username} -- ${elemento.website}`; // Asigna los valores del objeto al elemento li
      $fragmento2.appendChild($li); // Agrega el elemento li al fragmento para luego insertarlo en el HTML
    });

    const $lista2 = document.getElementById("lista2"); // Obtén la referencia al elemento lista en tu HTML
    $lista2.innerHTML = ""; // Limpia el contenido actual de la lista
    $lista2.appendChild($fragmento2); // Agrega los elementos li guardados en el fragmento al elemento lista
  } else {
    // Si la respuesta no es satisfactoria, muestra un mensaje de error
    let message = ajax2.statusText || "Ocurrió un error";
    const $lista2 = document.getElementById("lista2"); // Obtén la referencia al elemento lista en tu HTML
    $lista2.innerHTML = `Error ${ajax2.status}: ${message}`;
  }
  console.log("................Respuestas..............");
  console.log(ajax2.responseText);
  console.log("................URL..............");
  console.log(ajax2.responseURL);
  console.log("................Estado..............");
  switch (ajax2.readyState) {
    case 1:
      console.log("Cargando petición");
      break;
    case 2:
      console.log("Petición cargada");
      break;
    case 3:
      console.log("responseText tiene datos parciales");
      break;
    case 4:
      console.log("¡Completado!");
      break;
  }
  console.log("................HTTP..............");
  if (ajax2.status === 200) {
    console.log("respuesta correcta");
  } else if (ajax2.status === 404) {
    console.log("no encontrado.");
  } else if (ajax2.status === 505) {
    console.log("error interno del servidor");
  } else {
    console.log("error desconocido");
  }
});

/*Abre la petición con el método GET.*/
ajax2.open("GET", " https://jsonplaceholder.typicode.com/users");
/*envia la peticioN*/
ajax2.send();
