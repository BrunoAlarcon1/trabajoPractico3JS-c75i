function esPar(num) {
  if (num % 2 === 0) {
    return `<p>El numero ${num} es par</p>`;
  } else {
    return `<p>El numero ${num} no es par</p>`;
  }
}

document.write(esPar(2));
