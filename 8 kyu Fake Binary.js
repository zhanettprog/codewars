function fakeBin(x) {
  let xArr = x.split("");
  let res = [];
  for (let i = 0; i < xArr.length; i++) {
    if (Number(xArr[i]) < 5) {
      xArr[i] = 0;
    } else {
      xArr[i] = 1;
    }
  }
  return xArr.join("");
}
