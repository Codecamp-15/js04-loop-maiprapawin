let n = +prompt("Enter number");
console.log(n);

// Pattern Recognition
// 1150/10 = 115 >> count = 1;
// 115/10 = 11.5 >> count = 2;
// 11.5/10 = 1.15 >> count = 3;
// 1.15/10 = 0.115 >> count = 4;

// while (n > 10) {
//   console.log(n);
//   n = n / 10;
// }

let count = 0;
if (n < 0) n = -n;
while (n >= 1) {
  console.log(n);
  count++;
  n = n / 10;
}

// (1152 - 2) / 10 = 115
// (115 -5) / 10 = 11
// (11 - 1) / 10 = 1
// (1 - 1) / 10 = 0

// let sum = 0;
// while(n) { >> ตั้ง n เฉยๆได้ เพราะรู้ว่า n เรามีโอกาสเป็น 0 แล้ว end loop ได้
// let ramainer = n % 10;
// n = (n-remainder) / 10
// sum += remainder;
// count++;
// }
console.log(count);
