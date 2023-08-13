console.log("Learn while loop");

console.log("Start...");

let i = 1;
while (i <= 20) {
  //loop block ตราบใดที่ i ไม่เกิน 100 ให้รันไปเรื่อยๆ

  //   if (i % 3 == 0) {
  //     console.log(i);
  //   } else if (i % 5 == 0) {
  //     console.log(` ${i}: High Five`);
  //   }

  //   if (i % 3 != 0) {
  //     console.log(i);
  //   }

  //   i = i + 1; //i++ หรือ ++i ก็ได้ เพราะไม่ได้เอาค่า i ไปใช้ต่อ ก้ไม่ได้เป้นประเด็น
  // }

  // --------------------------------------
  // FizzBuzz
  // Range: 1-20;
  // divided by 3: PRINT Fizz
  // divided by 5: PRINT Buzz
  // divided by 3 and 5: PRINT FizzBuzz
  // others: PRINT number

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

  i++;
}

console.log("End...");

// let i = 1
// while(i++ < 10) {
// 1 < 10 => i =2 คือเอา i ไปใช้ก่อนค่อยให้ค่าเพิ่ม

// ควรใช้แบบนี้มากกว่า
// let i = 0;
// while(++i <= 10) {
// }
