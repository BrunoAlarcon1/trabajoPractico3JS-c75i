const ciudades = [];
do {
    let ciudad = prompt('Ingrese el nombre de la ciudad: ');
    ciudades.push(ciudad);
 
    
} while (confirm('Quiere agregar el nombre de otra ciudad'));

document.write(`<p>El asrreglo de ciudades tiene ${ciudades.length} elementos<p>`);
document.write(`<p>Elemento 1er posición: ${ciudades[0]}</p>`);
document.write(`<p>Elemento 3er posición: ${ciudades[2]}</p>`);
document.write(`<p>Elemento ultima posición: ${ciudades[ciudades.length-1]}</p>`);
ciudades.push('Paris');
document.write(`<p>Elemento ultima posición: ${ciudades[ciudades.length-1]}</p>`);
ciudades.splice(1,0,'Barcelona');
document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for(let i = 0;i<ciudades.length;i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`)



