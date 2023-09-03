function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((el) => (sum += el ** 2));
  return sum;
}
