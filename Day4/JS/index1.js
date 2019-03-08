xvar name = "Bejo";
var role = "penyihir";

if (name == ""){
	console.log("Nama harus diisi!")
} else if (role == ""){
	console.log("Halo" + name + ", Pilih peranmu untuk memulai game!")
} else if (name != "" && role != ""){
	switch (role){
	case "ksatria":
	console.log("Selamat datang di Dunia Proxytia, " + name)
	console.log("Halo Ksatria " + name + ", kamu dapat menyerang dengan senjatamu!")
	break;
	case "tabib":
	console.log("Selamat datang di Dunia Proxytia, " + name)
	console.log("Halo Tabib " + name + ", kamu akan membantu temanmu yang terluka.")
	break;
	case "penyihir":
	console.log("Selamat datang di Dunia Proxytia, " + name)
	console.log("Halo Penyihir " + name + ", ciptakan keajaiban yang membantu kemenanganmu!")
	break;
}
}