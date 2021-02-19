console.log("Nomor 6");

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
 input.splice(1, 1);
 input.splice(2, 0, "Roman Alamsyah Elsharawy");
 input.splice(1, 1);
 input.splice(2, 0, "Provinsi Bandar Lampung");
 input.splice(4, 1);
 input.splice(5, 0, "Pria");
 input.splice(6, 0, "SMA Internasional Metro ");
 console.log(input);

 console.log();

 var x = input[3].split("/");

 var salinX = x.slice();

 if (x[1].charAt(0) == 0) {
  x[1] = x[1].charAt(1);
 };

 var tampung = x[1];

 switch(parseInt(tampung)){
  case 1: {console.log("Januari"); break; }
  case 2: {console.log("Februari"); break; }
  case 3: {console.log("Maret"); break; }
  case 4: {console.log("April"); break; }
  case 5: {console.log("Mei"); break; }
  case 6: {console.log("Juni"); break; }
  case 7: {console.log("Juli"); break; }
  case 8: {console.log("Agustus"); break; }
  case 9: {console.log("September"); break; }
  case 10: {console.log("Oktober"); break; }
  case 11: {console.log("November"); break; }
  case 12: {console.log("Desember"); break; }
  default:  { console.log('Salah'); break;}
 }

 console.log();
 x.sort(function (value1, value2) { return value2 - value1 } ) ;
 console.log(x); 

 console.log();
 var join = salinX.join("-");
 console.log(join);

 console.log();
 var nama = input[1];
 var irisan = nama.slice(0, 15);
 console.log(irisan);

}

dataHandling2(input);