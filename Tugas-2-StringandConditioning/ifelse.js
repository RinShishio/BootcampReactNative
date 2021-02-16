var nama = "Ujang"
var pekerjaan = "warewolf"

if ( nama == "" ) {
    console.log("nama harus diisi")
} else if ( pekerjaan == "" ) {
    console.log("Halo "+nama +", Pilih peranmu untuk memulai game!")
} else {
    if(pekerjaan == "guard" ) {
        console.log("Selamat datang di Dunia Werewolf," +nama)
        console.log("Halo Guard, " +nama+ " kamu akan membantu melindungi temanmu dari serangan werewolf.")

    } else if( pekerjaan == "penyihir") {
        console.log("Selamat datang di Dunia Werewolf," +nama)
        console.log("Halo Penyihir, " +nama+ " kamu dapat melihat siapa yang menjadi werewolf!")
    } else if ( pekerjaan == "warewolf" ) {
        console.log("Selamat datang di Dunia Werewolf," +nama)
        console.log("Halo Warewolf, " +nama+ " Kamu akan memakan mangsa setiap malam!")
    }
}
