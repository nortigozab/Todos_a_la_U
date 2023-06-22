/**
 * ! Ejercicio
 */

const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

let productos = [];
let totalCompra = 0;

emisorProductos.on("error", () => {
  console.log(new Error("Fallo la compra"));
});

emisorProductos.on("imprimir", (total, nombre, productos) => {
  console.log(
    `Se realizó una compra por un valor de $${total} COP a nombre de ${nombre} el día ${new Date().toLocaleDateString()}`
  );
  console.log("Productos comprados:");
  for (const producto of productos) {
    console.log(`${producto.nombre} - Precio: $${producto.precio} COP`);
  }
});

function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
  totalCompra += precio;
}

function generarFactura(cliente) {
  emisorProductos.emit("imprimir", totalCompra, cliente, productos);
}

emisorProductos.emit("error");
agregarProducto("Producto 1", 1000);
agregarProducto("Producto 2", 2000);
agregarProducto("Producto 3", 3000);
generarFactura("Amparo");

/**
 * !Ejemplo
 */

/*
//simular una factura
const EventEmitter = require("events"); //se importa el modulo eventos

var emisorProductos = new EventEmitter();

//definicion de las funciones manejadoras del evento
emisorProductos.on("error", () => {
  console.log(new Error("Fallo la compra"));
});
//funciones con varios parametros
emisorProductos.on("imprimir", (total, nombre) => {
  console.log(
    `Se realizo una compra por un valor de $${total} COP a nombre de ${nombre} el dia ${new Date().toLocaleDateString()}`
  );
});

//emicion de la funcion error
emisorProductos.emit("error");
//emicion de la funcion imprimir
emisorProductos.emit("imprimir", 5000, "Amparo");
*/
