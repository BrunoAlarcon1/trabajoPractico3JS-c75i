function infoCadena(texto) {
  if (texto === texto.toUpperCase()) {
    return `<p>La cadena ${texto}, esta formada solo por mayusculas</p>`;
  } else if (texto === texto.toLowerCase()) {
    return `<p>La cadena ${texto}, esta formada solo por minusculas</p>`;
  } else {
    return `<p>La cadena ${texto}, esta formada  por una mezcla de mayusculas y minusculas</p>`;
  }
}

document.write(infoCadena('HOLA COMO ESTAS'));