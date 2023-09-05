function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  classPoints.forEach((el) => (sum += el));
  if (sum / classPoints.length < yourPoints) {
    return true;
  } else {
    return false;
  }
}
