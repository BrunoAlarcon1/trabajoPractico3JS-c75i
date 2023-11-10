const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(meses.length);

document.write(`<h1>Lista de meses</h1>`);
document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);
