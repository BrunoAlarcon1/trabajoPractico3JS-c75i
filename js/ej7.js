function tabla(num) {
  document.write(`<h1>Tabla del ${num}</h1>`);
  document.write(`<ul>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`<li>${i}*${num} = ${i * num}</li>`);
  }

  document.write(`</ul>`);
}

tabla(parseInt(prompt(`Ingrese un numero para calcular su tabla`)));