var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  if (humanYears === 2) {
    return [2, 24, 24];
  }
  if (humanYears >= 3) {
    return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
  }
};
