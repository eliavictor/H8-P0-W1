
/*
==================
Abbreviation Maker
===================

[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string.

function akan mengembalikan nilai/output berupa singkatan dari input yang diberikan 
dan juga kebalikan dari singkatan dari input yang diberikan.


[EXAMPLE]
input: string: 'Daring Fox Keren'
proses: singkatan dari 'Daring Fox Keren' adalah DFK dan kebalikannya adalah KFD
output: DFKKFD

input: string: 'Hatsune Miku Kawaii'
proses: singkatan dari 'Hatsune Miku Kawaii' adalah HMK dan kebalikannya adalah KMH
output: HMKKMH

input: string: 'Bagel'
proses: singkatan dari 'Bagel' adalah B begitu pula kebalikannya
output: BB

[RULE]
- HANYA BOLEH MENGGUNAKAN LOOPING DAN CONDITIONAL 
- DILARANG MENGGUNAKAN REGEX, split, slice, splice, substring
*/

// str= "Daring"
// var i = 0;
// console.log(i)
// while () {
//  console.log(str.charAt(str))
// }


// function abbreviationMaker(string) {

// }

// console.log(abbreviationMaker('Daring Fox Keren'))
//DFKKFD
// console.log(abbreviationMaker('Hatsune Miku Kawaii'))
// //HMKKMH
// console.log(abbreviationMaker('Bagel'))
// //BB

var strings ="AkBlCmD";
strings = strings.replace(/\s/g,'');
var loop1=0; 
var loop2=0;
var b='';
var jml = 0;
var result='';
var char1='';
console.log(strings)

while (loop1 <= strings.length){
    char1 = strings.charAt(loop1);
    if (char1 == char1.toUpperCase()) {
 	        for (var j = 0; j < 1; j++) {
			result += char1;
			}
    }
loop1++;
}
loop2 = loop2-1
var a = result.length+5;
while (loop2 < a){
	char2 = result.charAt(a);
	result += b;
a--
}
console.log(result)