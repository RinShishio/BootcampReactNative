var flag = 2;
console.log("Jawaban No1")
console.log("Looping Pertama")

while(flag <= 20) { 
  if(flag%2==0){ 
    console.log(flag+" - I love coding"); 
    } 
  flag++;
}
var flag1 = 20;
console.log("Looping Kedua")
while( flag1 >1 ){ 
  if( flag1%2==0 ){ 
    console.log(flag1+" - I will become a mobile developer"); 
    } 
  flag1--;
}
console.log("\n")
console.log("Jawaban No2")
for(var angka = 1; angka <= 20; angka++) {
  if(angka%3 == 0 && angka%2 ==1){
    console.log(angka+" - I Love Coding")
  } else if (angka%2 == 1) {
     console.log(angka + " - Santai")
  } else {
     console.log(angka + " - Berkualitas")
  }
}
