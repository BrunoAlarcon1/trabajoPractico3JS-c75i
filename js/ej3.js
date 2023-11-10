/* let dados = [];
let resultados = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(dado1);
  console.log(dado2);
  let resultadoParcial = dado1 + dado2;
  console.log(resultadoParcial);
  resultados.push(resultadoParcial);
  for(let j =0;j<resultadoParcial.length)

}

console.log(resultados.length)
 */


// Función para simular el lanzamiento de un dado
function lanzarDado() {
    return Math.ceil(Math.random() * 6);
  }
  
  // Función para simular el lanzamiento de dos dados y contar las sumas
  function simularLanzamientos() {
    var resultados = [];
    var conteoApariciones = new Array(12).fill(0); // Inicializa un array de 12 elementos (para sumas de 2 a 12) con 0
  
    for (var i = 0; i < 50; i++) {
      var dado1 = lanzarDado();
      var dado2 = lanzarDado();
      var suma = dado1 + dado2;
  
      // Anota la suma en el array de resultados
      resultados.push(suma);
  
      // Incrementa el contador de apariciones para la suma actual
      conteoApariciones[suma - 2]++;
    }
  
    return { resultados, conteoApariciones };
  }
  
  // Realiza la simulación de lanzamientos
  var { resultados, conteoApariciones } = simularLanzamientos();
  
  // Muestra los resultados y el conteo de apariciones
  console.log("Resultados de la simulación de lanzamiento de dos dados:");
  console.log(resultados);
  
  console.log("\nConteo de apariciones de cada resultado:");
  console.log(conteoApariciones);
  