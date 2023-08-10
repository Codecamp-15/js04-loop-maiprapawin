// let x = "";
// for (let a = 1; a <= 8; a++) {
//   for (let b = 1; b <= 8; b++) {
//     if (b <= a) x += `${b}`;
//   }
//   x += "\n";
// }
// console.log(x);

let x = "";
for (let a = 1; a <= 8; a++) {
  for (let b = 1; b <= 8; b++) {
    if (b <= a) x += b;
  }
  x += "\n";
}
console.log(x);
