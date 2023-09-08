function getAverage(marks) {
  let res = 0;
  marks.forEach((el) => (res += el));
  return Math.floor(res / marks.length);
}
