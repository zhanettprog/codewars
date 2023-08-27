function invert(array) {
  return array.map((el) => {
    if (el > 0) {
      return el * -1;
    } else {
      return Math.abs(el);
    }
  });
}
