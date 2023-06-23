//servidor
const config = require("./config.js");
const express = require("express");
const app = express();

const { infoCursos } = require("./cursos.js"); //sintaxis de desestructuracion
const { infoAnimales } = require("./animales.js"); //sintaxis de desestructuracion

// !Routing
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hola mundo!</h1>");
});
//informacion de todos los cursos
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});
//informacion solo de los cursos de programacion backend
app.get("/api/cursos/programacion-web-backend", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacionWebBackend));
});
//informacion solo de los cursos de programacion frontend
app.get("/api/cursos/programacion-web-frontend", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacionWebFrontend));
});

// !  Parametros url
//! Funcion para ordenar datos de mayor a menos
function ordenarDatos(datos, campo) {
  if (campo === "nivel") {
    return datos.sort((a, b) =>
      b.nivel > a.nivel ? 1 : b.nivel < a.nivel ? -1 : 0
    );
  }
  if (campo === "id") {
    return datos.sort((a, b) => b.id - a.id);
  }
  // Si no se proporciona un campo válido, retorna los datos sin ordenar
  return datos;
}
app.get("/api/cursos/programacion-web-backend/:titulo", (req, res) => {
  //se utilizan : para crear parametros url
  const titulo = req.params.titulo; // se recomienda que sea el mismo nombre que el parametro que definio
  const cursoConcreto = infoCursos.programacionWebBackend.filter(
    (curso) => curso.titulo === titulo
  ); //filtro de javascript
  if (cursoConcreto.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${titulo}`); //codigo de estado 404(No se encontraron elementos), se debe retornar debido a que continuaria el codigo
  }
  // !Parametros query (?ordenar=nivel)
  //Como esta ordenado se ordenara al reves
  const datosOrdenados = ordenarDatos(cursoConcreto, req.query.ordenar);
  res.send(JSON.stringify(datosOrdenados));
});
app.get("/api/cursos/programacion-web-frontend/:titulo", (req, res) => {
  //se utilizan : para crear parametros url
  const titulo = req.params.titulo; // se recomienda que sea el mismo nombre que el parametro que definio
  const cursoConcreto = infoCursos.programacionWebFrontend.filter(
    (curso) => curso.titulo === titulo
  ); //filtro de javascript
  if (cursoConcreto.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${titulo}`); //codigo de estado 404(No se encontraron elementos), se debe retornar debido a que continuaria el codigo
  }
  const datosOrdenados = ordenarDatos(cursoConcreto, req.query.ordenar);
  res.send(JSON.stringify(datosOrdenados));
});
app.get("/api/cursos/programacion-web-backend/:titulo/:nivel", (req, res) => {
  const titulo = req.params.titulo;
  const nivel = req.params.nivel;

  const cursosFiltrados = infoCursos.programacionWebBackend.filter(
    (curso) => curso.titulo === titulo && curso.nivel === nivel
  );

  if (cursosFiltrados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${titulo} en el nivel ${nivel}`);
  }

  res.send(JSON.stringify(cursosFiltrados));
});

app.get("/api/cursos/programacion-web-frontend/:titulo/:nivel", (req, res) => {
  const titulo = req.params.titulo;
  const nivel = req.params.nivel;

  const cursosFiltrados = infoCursos.programacionWebFrontend.filter(
    (curso) => curso.titulo === titulo && curso.nivel === nivel
  );

  if (cursosFiltrados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${titulo} en el nivel ${nivel}`);
  }

  res.send(JSON.stringify(cursosFiltrados));
});

// !Routing
//informacion de todos los animales
app.get("/api/animales", (req, res) => {
  res.send(JSON.stringify(infoAnimales));
});
//informacion solo de los Animales aereos
app.get("/api/animales/aereos", (req, res) => {
  res.send(JSON.stringify(infoAnimales.aereos));
});
//informacion solo de los Animales terrestres
app.get("/api/animales/terrestres", (req, res) => {
  res.send(JSON.stringify(infoAnimales.terrestres));
});
//informacion solo de los Animales acuaticos
app.get("/api/animales/acuaticos", (req, res) => {
  res.send(JSON.stringify(infoAnimales.acuaticos));
});
// !Parametros url
//* Utilizo esta funcion para quitar la tilde y al tipear la palabra en la ruta me evalue el nombre en este caso, me pasaba con aguila y Águila que no son iguales
function removeAccents(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

app.get("/api/animales/aereos/:nombre", (req, res) => {
  const nombre = removeAccents(req.params.nombre);

  const animalesFiltrados = infoAnimales.aereos.filter(
    (animal) => removeAccents(animal.nombre) === nombre
  );

  if (animalesFiltrados.length === 0) {
    return res
      .status(404)
      .send(
        `No se encontraron animales aéreos con el nombre ${req.params.nombre}`
      );
  }

  const datosOrdenados = ordenarDatos(animalesFiltrados, req.query.ordenar);
  res.send(JSON.stringify(datosOrdenados));
});

app.get("/api/animales/terrestres/:nombre", (req, res) => {
  const nombre = removeAccents(req.params.nombre);

  const animalesFiltrados = infoAnimales.terrestres.filter(
    (animal) => removeAccents(animal.nombre) === nombre
  );

  if (animalesFiltrados.length === 0) {
    return res
      .status(404)
      .send(
        `No se encontraron animales terrestres con el nombre ${req.params.nombre}`
      );
  }

  const datosOrdenados = ordenarDatos(animalesFiltrados, req.query.ordenar);
  res.send(JSON.stringify(datosOrdenados));
});

app.get("/api/animales/acuaticos/:nombre", (req, res) => {
  const nombre = removeAccents(req.params.nombre);

  const animalesFiltrados = infoAnimales.acuaticos.filter(
    (animal) => removeAccents(animal.nombre) === nombre
  );

  if (animalesFiltrados.length === 0) {
    return res
      .status(404)
      .send(
        `No se encontraron animales acuáticos con el nombre ${req.params.nombre}`
      );
  }

  const datosOrdenados = ordenarDatos(animalesFiltrados, req.query.ordenar);
  res.send(JSON.stringify(datosOrdenados));
});

app.listen(config.PORT, config.HOST, function () {
  console.log(
    `El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`
  );
});
