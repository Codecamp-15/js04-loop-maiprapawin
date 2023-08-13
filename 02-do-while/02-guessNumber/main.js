// Program 1: Input User -1

// let ansNumber = prompt("Enter your magic number"); // มีโอกาสเกิดเป้น null, string: "", "......", string ที่ convert เป็นเลขไม่ได้ เช่น "qejijsfio" หรือ convert เป็นเลขได้ เช่น "12" แต่ก็มีโอกาสที่มันจะน้อยกว่า 1 หรือมากกว่า 90 ได้เหมือนกัน

// ไม่ควรทำแบบด้านล่างนี้ เพราะถ้าเป็น null มันจะทำต่อเป็น null.trim() แล้วจะพัง ถ้าใช้ || เจออันไหน true มันก็จบ ไม่พัง
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === "";
// let isNan = isNaN(ansNumber);

// let isValid = ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber); //ไว้เช็คว่าเป็นค่า null หรือ empty หรือเปล่า หรือไม่ใช่เลขหรือเปล่า

// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 || Number(ansNumber) <= 99;

// if (isValid) {
//   alert("Invalid Input");
// } else if (outOfRange) {
//   alert("Invalid Range");
// } else if (isInRange) {
//   alert("Try to guess number"); // Program: Player 2
// }

////////////////////////

// Program 1: Version 2 รับ input ได้เรื่อยๆ จนกว่าจะพิมพ์ถูก แต่ให้กด ESC เพื่อจบโปรแกรมได้

// let ansNumber = "";
// let isEmpty;
// let isNan;
// let outOfRange;

// do {
//   ansNumber = prompt("Enter your magic number");
//     if(ansNumber != null) {
//       isEmpty = ansNumber.trim() === "";
//       isNan = isNaN(ansNumber);
//     }
// } while (isEmpty || isNan);

let ansNumber = "";
let isEmpty;
let isNan;
let outOfRange;

do {
  ansNumber = prompt("Enter your magic number") || ""; // null || ""
  isEmpty = ansNumber.trim() === "";
  isNan = isNaN(ansNumber);
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;

  if (isEmpty || isNan) {
    alert("Invalid Input. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  }
} while (isEmpty || isNan);

/////////////////////////

// Program 2: Guess
// Ver.1 ทายซ้ำ
// Hint Out of Range
// Hing invalid Range

let guessNumber;

do {
  guessNumber = prompt("Enter your answer") || "";
  isEmpty = guessNumber.trim() === "";
  isNan = isNaN(guessNumber);
  outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;

  if (isEmpty || isNan) {
    alert("Invalid Input. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  } else if (+guessNumber > +ansNumber) {
    alert("Too High");
  } else if (+guessNumber < +ansNumber) {
    alert("Too Low");
  } else if (+guessNumber === +ansNumber) {
    alert("Correct!!!");
  }
} while (+guessNumber != +ansNumber);

////////
//ทายได้ไม่เกิน 5 ครั้ง
