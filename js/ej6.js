function calcularPerimetro(ladoA, ladoB) {
  const perimetro = 2 * (ladoA + ladoB);
  return perimetro;
}

const ladoA = parseFloat(
  prompt("Ingrese el valor del primer lado del rectangulo")
);
const ladoB = parseFloat(
  prompt("Ingrese el valor del primer lado del rectangulo")
);

document.write(`<p>${calcularPerimetro(ladoA,ladoB)}</p>`);
