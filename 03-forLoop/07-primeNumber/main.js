// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// Program: จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า

let n = 5; // 5/1 หาร 2-5 ไปเรื่อยๆ

for (let n = 2; n <= 100; n++) {
  let isPrime = true; //flag
  for (let divider = 2; divider <= n; divider++) {
    // เริ่มที่ 2 เพราะเรารู้อยู่แล้วว่าหาร 1 มันลงตัว
    // ถ้าเช็ค boolean ใช้ if

    if (n % divider == 0) isPrime = false;
    break;
  }
}

if (isPrime) console.log(n);
// if (isPrime) alert(`number ${n} is prime number`);
// else alert(`number ${n} is not prime number`);
//ทางเดียวที่จะเป็น true ได้คือไม่เป็น false
