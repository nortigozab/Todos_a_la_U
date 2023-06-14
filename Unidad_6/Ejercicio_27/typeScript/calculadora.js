var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMultiplicacion = document.getElementById("btnMultiplicacion");
var btnDivision = document.getElementById("btnDivision");
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultadoDiv = document.getElementById("resultado");
btnSuma.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var resultado = suma(num1, num2);
    mostrarResultado(resultado);
});
btnResta.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var resultado = resta(num1, num2);
    mostrarResultado(resultado);
});
btnMultiplicacion.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var resultado = multiplicacion(num1, num2);
    mostrarResultado(resultado);
});
btnDivision.addEventListener("click", function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
        var resultado = division(num1, num2);
        mostrarResultado(resultado);
    }
    else {
        mostrarResultado("No se puede dividir entre 0");
    }
});
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "No se puede dividir entre 0";
    }
}
function mostrarResultado(resultado) {
    resultadoDiv.textContent = "El resultado es: ".concat(resultado);
}
