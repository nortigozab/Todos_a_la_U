function saludar(nombre, edad) {
  return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
}
function saludarHolaMundo() {
  return "Hola mundo";
}
//ejemplo para exportación de clase
class saludito {
  constructor(name) {
    this.name = name;
  }
  saludar(nombre, edad) {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad} y este es ${this.name}`;
  }
  saludarHolaMundo() {
    return `Hola mundo y este es ${this.name}`;
  }
}
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
  saludito: saludito,
};
