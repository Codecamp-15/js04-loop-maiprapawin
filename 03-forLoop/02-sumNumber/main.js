let sumAll = 0;
for (let num = 1; num <= 100; num++) {
  sumAll = sumAll + num;
}
console.log(`sumAll: ${sumAll}`);
// ผลรวมตัวเลขทุกตัว = 5050

// let sumEven = 0;
// for (let even = 2; even <= 100; even = even + 2) {
//   sumEven = sumEven + even;
// }
// console.log(sumEven);

// // ผลรวมเฉพาะเลขคู่ = 2550

// let sumOdd = 0;
// for (let odd = 1; odd <= 100; odd++) {
//   if (odd % 2 != 0) {
//     sumOdd = sumOdd + odd;
//   }
// }
// console.log(sumOdd);
// ผลรวมเฉพาะเลขคี่ = 2500

let sumEven = 0;
let sumOdd = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  if (i % 2 == 0) sumEven += i;
  else sumOdd += i;
}
console.log(`sumEven: ${sumEven}, sumOdd: ${sumOdd}`);

//////////////////////////

let sumEvenSquare = 0;
let sumThirdSquare = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvenSquare = sumEvenSquare + i ** 2;
  }

  if (i % 3 == 0) {
    sumThirdSquare = sumThirdSquare + i ** 2;
  }
}
console.log(`sumEvenSQ: ${sumEvenSquare}`);
console.log(`sumThirdSQ: ${sumThirdSquare}`);
console.log(`Result is: ${sumEvenSquare - sumThirdSquare}`);
