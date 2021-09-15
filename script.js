function fibonacci(n) {
  let firstElement = 0;
  let secondElement = 1;
  let nElement = 0;

  for (let i = 0; i < n; i++) {
    if (i > 1) {
      nElement = firstElement + secondElement;
      firstElement = secondElement;
      secondElement = nElement;
    } else {
      nElement = i;
    }
  }
  return nElement;
}

console.log(fibonacci(11));