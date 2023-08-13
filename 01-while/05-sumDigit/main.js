let n = +prompt("Enter number");

let count = 0;
if (n < 0) n = -n;

let sum = 0;
while (n) {
  // >> ตั้ง n เฉยๆได้ เพราะรู้ว่า n เรามีโอกาสเป็น 0 แล้ว end loop ได้

  let remainder = n % 10;
  n = (n - remainder) / 10;
  sum += remainder;
  count++;
}

console.log(count);
