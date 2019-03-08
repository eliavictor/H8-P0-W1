var rows = 3;
var a = "";
var b = "";
var c = "";
var btg = "*";
var nil = " "
var z = 1;
var y = 1;

//No 1
console.log("---Hasil no 1---")
for (z; z <= rows; z++) {
	console.log(btg)
}
console.log(" ")

//No 2
console.log("---Hasil no 2---")
for (z = 1; z <= rows; z++) {
	for (y; y <= rows; y++) {
	a += btg;
}
console.log(a);
}
console.log(" ")

//No 3
console.log("---Hasil no 3---")
y = 1;
z = 1;
for (z; z <= rows; z++) {
	b += btg;
	console.log(b);
}

console.log("---Hasil no 3---")
y = 1;
for (z; z <= rows; z--) {
	c += btg;
	console.log(c);
}