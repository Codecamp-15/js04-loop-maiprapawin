// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js
// /*
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7
// ELSE
//     PRINT sum
//     PRINT average

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

console.log(sum);
console.log(average);
