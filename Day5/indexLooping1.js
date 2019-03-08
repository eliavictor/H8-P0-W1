
//No 1

var a = "I love coding";
var b = "I wil become fullstack developer";
var z = 0;
var y = 20;
var ganjil = "Ganjil";
var genap = "Genap";
var k3 = "Kelipatan 3";
var k6 = "Kelipatan 6";
var k10 = "Kelipatan 10";

console.log("---->Hasil no 1<----")
console.log("---Looping pertama---");
while (z < 20){
	z = z + 2;
	console.log(z + " - " + a);
}

console.log("---Looping kedua---");
while (z >= 2){
	console.log(z + " - " + b);
	z = z - 2;
}
console.log(" ")

//No 2

console.log("---->Hasil no 2<----")
console.log("---Looping pertama---");
for (z = z + 1; z <= y; z++) {
	console.log(z + " - " + a);
}

console.log("---Looping kedua---");
for (z = z - 1; z >= 1; z--) {
	console.log(z + " - " + a);
}
console.log(" ")

//No 3

console.log("---->Hasil no 3<----");
console.log("---Looping ganjil & genap---");

for (z = 1; z <= 100; z++) {
	if (z % 2 == 0) {
		console.log(z + " " + genap);
	} else {
		console.log(z + " " + ganjil);
	}
}

console.log("---Looping kelipatan 3---");

for (z = 1; z <= 100; z = z + 2) {
	if (z % 3 == 0) {
		console.log(z + " " + k3);
	}
}

console.log("---Looping kelipatan 6---");

for (z = 1; z <= 100; z = z + 5) {
	if (z % 6 == 0) {
		console.log(z + " " + k6);
	}
}

console.log("---Looping kelipatan 10---");

for (z = 1; z <= 100; z = z + 9) {
	if (z % 10 == 0) {
		console.log(z + " " + k10);
	}
}
