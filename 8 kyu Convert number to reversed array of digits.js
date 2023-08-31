function digitize(arrNumbers) {
  return String(arrNumbers).split("").map(Number).reverse();
}
