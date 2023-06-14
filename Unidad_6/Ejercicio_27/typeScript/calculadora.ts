const btnSuma = document.getElementById("btnSuma");
const btnResta = document.getElementById("btnResta");
const btnMultiplicacion = document.getElementById("btnMultiplicacion");
const btnDivision = document.getElementById("btnDivision");
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultadoDiv = document.getElementById("resultado");

btnSuma.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = suma(num1, num2);
  mostrarResultado(resultado);
});

btnResta.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = resta(num1, num2);
  mostrarResultado(resultado);
});

btnMultiplicacion.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = multiplicacion(num1, num2);
  mostrarResultado(resultado);
});

btnDivision.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (num2 !== 0) {
    const resultado = division(num1, num2);
    mostrarResultado(resultado);
  } else {
    mostrarResultado("No se puede dividir entre 0");
  }
});

function suma(a: number, b: number): number {
  return a + b;
}

function resta(a: number, b: number): number {
  return a - b;
}

function multiplicacion(a: number, b: number): number {
  return a * b;
}

function division(a: number, b: number): number | string {
  if (b !== 0) {
    return a / b;
  } else {
    return "No se puede dividir entre 0";
  }
}

function mostrarResultado(resultado: number | string) {
  resultadoDiv.textContent = `El resultado es: ${resultado}`;
}
