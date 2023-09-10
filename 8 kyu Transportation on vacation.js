function rentalCarCost(d) {
  return d <= 2 ? d * 40 : d > 2 && d < 7 ? d * 40 - 20 : d * 40 - 50;
}
