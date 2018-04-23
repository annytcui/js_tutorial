let a = [42, 17, 8, 99];

/* function numberCompare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

console.log(a.sort(numberCompare));*/

a.sort(function(a, b) {
  return a - b;
}).forEach(function(element) {
  console.log(element);
});
