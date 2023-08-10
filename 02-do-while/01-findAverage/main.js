let num = "";
let isEmpty;
let isNan;
let zeroMinus;
let count = 0;
let sum = 0;
let average;

do {
  num = prompt("Enter a number") || "";
  isEmpty = num.trim() === "";
  isNan = isNaN(num);
  zeroMinus = num <= 0;

  if (num != isEmpty && num != isNan && num != zeroMinus) {
    num;
  }

  sum += +num;
  average = sum / count;
  count++;
} while (num != isEmpty && num != isNan && num != zeroMinus);
