var tanggal = 0;
var bulan = 0;
var tahun = 1800;

if (tanggal <= 0 || tanggal >= 31){
	console.log("Masukan tanggal dari 1-31")
}
	if (bulan <= 0 || bulan >= 13) {
		console.log("Masukan bulan dari 1-12")
		}
		if (tahun <= 1899 || tahun >= 2201){
			console.log("Masukan tahun dari 1900-2200")
			} 
else {
	switch (bulan){
		case 1:
		console.log(tanggal + " Januari " + tahun)
		break;
		case 2:
		console.log(tanggal + " Pebruari " + tahun)
		break;
		case 3:
		console.log(tanggal + " Maret " + tahun)
		break;
		case 4:
		console.log(tanggal + " April " + tahun)
		break;
		case 5:
		console.log( tanggal + " Mei " + tahun)
		break;
		case 6:
		console.log(tanggal + " Juni " + tahun)
		break;
		case 7:
		console.log(tanggal + " Juli " + tahun)
		break;
		case 8:
		console.log(tanggal + " Agustus " + tahun)
		break;
		case 9:
		console.log(tanggal + " September " + tahun)
		break;
		case 10:
		console.log(tanggal + " Oktober " + tahun)
		break;
		case 11:
		console.log(tanggal + " November " + tahun)
		break;
		case 12:
		console.log(tanggal + " Desember " + tahun)
		break;
	}
}