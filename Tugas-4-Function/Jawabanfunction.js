console.log("Jawaban No1")
function teriak() {
    console.log("Hello sanbers")
}
teriak();
console.log("\n")
console.log("Jawaban No2")

var kalikan = function(num1, num2) {
    return num1 *num2
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48
console.log("\n")
console.log("Jawaban No3")
var introduce = function(name,age,address,hobby) {
    var kenal = "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby
    return kenal
}
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 