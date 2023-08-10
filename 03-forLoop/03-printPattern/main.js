// let str = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= 5; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 4; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

let str = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j <= i) str += "*";
  }
  str += "\n";
}
console.log(str);
