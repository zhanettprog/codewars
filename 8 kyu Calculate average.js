function findAverage(array) {
  let res = 0;
  if (array.length === 0) {
    return 0;
  }
  array.forEach((el) => {
    res += el;
  });
  return res / array.length;
}
