function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }

  return sum;
}
