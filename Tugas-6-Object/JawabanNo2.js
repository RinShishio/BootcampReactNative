function shoppingTime(memberid,money) {
    var belanja = [];
    var sisauang = money;
if (memberid== null || memberid == "") {
    return "Mohon Maaf Toko X hanya berlaku untuk member saja";
} else if (money < 50000) {
    return " Mohon maaf, uang tidak cukup"
}else{
    if (money >= 1500000) {
        belanja.push("Sepatu Stadattu")
        sisauang -= 1500000;
    }
    if (money >=500000) {
        belanja.push("Baju Zoro")
        sisauang -= 500000;
    }
    if (money >=250000) {
        belanja.push("baju H&N")
        sisauang -= 250000;
    }
    if (money >=175000) {
        belanja.push("Sweater Uniklooh")
        sisauang -= 175000;
    }
    if (money >=50000) {
        belanja.push("casing Handphone")
        sisauang -= 50000;
    }
    var barang = {
        memberid : memberid,
        money : money,
        listpurchase : belanja,
        changeMoney : sisauang
    }
    return barang;
}
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja