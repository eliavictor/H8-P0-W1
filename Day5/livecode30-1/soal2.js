/*
=============
Number Ladder
=============

[INSTRUCTION]
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1

contoh 2 (height = 5):
54321
4321
321
21
1

contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.

Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
// function generateNumbers(height) {
// kode anda disini
// }

// console.log(generateNumbers(3))
// 321
// 21
// 1

// console.log(generateNumbers(8))
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1

// console.log(generateNumbers(20))
  // 2019181716151413121110987654321
  // 19181716151413121110987654321
  // 181716151413121110987654321
  // 1716151413121110987654321
  // 16151413121110987654321
  // 151413121110987654321
  // 1413121110987654321
  // 13121110987654321
  // 121110987654321
  // 1110987654321
  // 10987654321
  // 987654321
  // 87654321
  // 7654321
  // 654321
  // 54321
  // 4321
  // 321
  // 21
  // 1

// var num = 5;
// var num2 = num;
// var i = 1;
// var j = 1;
// var result = '';
// var result2 = '';

// while(num2 >= i){
//     while(num >= j){
//       result += num
//       num--
//     }
//   result2 += num2 
//   num2--
//   console.log(num2)
// }
// console.log(result2)

var height = 5;
var a;
var b;
var c='';
for (a = height; a >= 1; a--) {
  for (b = a; b >= 1; b--) {
    c += b
}
console.log(c)
c='';
}