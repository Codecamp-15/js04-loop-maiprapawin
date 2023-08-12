// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)

/////////////////////////////////////////////////////////////

// Year 1
let interestRate = 2.5;
let balance = 100_000;
let newBalance = balance + balance * (interestRate / 100);
// console.log(`Earns ${newBalance} baht in year 1`);

// Year 2 - 10
for (let year = 2; year <= 10; year++) {
  balance = newBalance;
  newBalance = balance + balance * (interestRate / 100);
  console.log(newBalance);
}

// Year 10 = เงินฝากสะสมรวม 128,008.45 baht
