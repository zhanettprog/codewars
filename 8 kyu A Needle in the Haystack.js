function findNeedle(haystack) {
  let res = "";
  haystack.forEach((el, i) => {
    if (el === "needle") {
      res = `found the needle at position ${i}`;
    }
  });
  return res;
}
