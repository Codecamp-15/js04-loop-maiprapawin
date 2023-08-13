console.log("Start..");

// () = parenthesis
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 0; i < 3; i++) {
//   console.log(" >> Hello");
// }

// for (let i = 2; i <= 20; i = i + 2) {
//   //if (i % 1 == 0);
//   console.log(i);
// }

// FizzBuzz
// for (let i = 1; i <= 20; i = i + 1) {
//   if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else console.log(i);
// }

// Skip Fizz
// for (let i = 1; i <= 20; i = i + 1) {
//   if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 == 0) continue;
//   else console.log(i);
// }

// continue = อัพเดทค่า และเริ่มรัน loop รอบถัดไป

// Ex. concat string (continue)
// let str = "";
// for (let i = 1; i <= 10; i++) {
//   //Guard
//   if (i % 3 == 0) continue;
//   str += i;
// }
// console.log(str); //12457810

// Ex. Remove vowel (a e i o u)
// let src = "codecamp";
// let res = ""; //cdcmp

// // src.length = 8
// // src[0] = c
// // src[1] = o

// for (let i = 0; i < src.length; i++) {
//   //   console.log(i, src[i]);
//   let c = src[i];
//   let isVowel = c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
//   if (isVowel) continue;
//   else res = res + src[i];
//   // "" + src[0] == "" + "c" = "c"
//   // "" + src[1] == "" + "o" = "o"
// }
// console.log(res);

// ADVANCE: Nested loop;
// Multiplicatoin Table

for (let i = 2; i <= 3; i++) {
  console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}

console.log("End..");
