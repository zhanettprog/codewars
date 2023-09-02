function countSheeps(arrayOfSheep) {
  let res = 0;
  arrayOfSheep.forEach((el) => {
    if (el === true) {
      res += 1;
    }
  });
  return res;
}
