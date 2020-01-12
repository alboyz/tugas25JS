let sebelunya = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelunya : " + sebelunya);
let ascending = sebelunya.sort(function(a, b) {
  return a - b;
});
console.log("Ascending : " + ascending);
let descending = sebelunya.sort(function(a, b) {
  return b - a;
});
let sFilter = sebelunya.filter(function(sebelunya) {
  return sebelunya >= 10;
});

console.log("Descending :" + descending);
console.log("Filter >10 : " + sFilter);
