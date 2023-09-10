const quarterOf = (month) => {
  return month < 4 ? 1 : month > 3 && month < 7 ? 2 : month > 9 ? 4 : 3;
};
