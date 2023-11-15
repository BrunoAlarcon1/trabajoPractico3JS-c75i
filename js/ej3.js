const resultadosPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let resultadoParcial = dado1 + dado2;
  console.log(resultadoParcial);
  for (let j = 0; j < resultadosPosibles.length; j++) {
    if (resultadoParcial === resultadosPosibles[j]) {
      apariciones[j] += 1;
    }
  }
}

console.log(apariciones);
document.write(`<table border="1">`);
document.write(`<tr><th>Suma</th><th>Apariciones</th></tr>`);
for (let i = 0; i < resultadosPosibles.length; i++) {
  document.write(`<tr><td>${resultadosPosibles[i]}</td><td>${apariciones[i]}</td></tr>`);
}
document.write(`</table>`);



