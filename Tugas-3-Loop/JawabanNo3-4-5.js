

var s = 5;
var str = "#"
console.log("Jawaban No 3")
for(var i =0; i<s*s;i++){
    if (i%s == 0 && i>0) {
        console.log(str);
        str = "#";
  
        
    }
    str += "#";
}

var s = 7;
    var output = "#"
    console.log("\n")
    console.log("Jawaban No 4")
    for (var i = 0; i <= s; i++) {
        for (var j = 1; j <= i; j++) {
            output += "#";
        }
        console.log(output);
        output = "#";
    }


var s = ''
var p = 8
var l = 8
console.log("\n")
console.log("Jawaban No 5")

for (var i =1; i<= l;i++){

    if (i%2==0) {
        for (var j = 1; j <= p; j++) {
            if(j%2 == 0){
                s +="#"
            } else{
                s+=" "
            }
            
        }
        
    }else {
        for (var j = 1; j <= p; j++) {
            if(j%2 == 0){
                s +=" "
            } else{
                s+="#"
            }
            
        }
    }
    s+= "\n"
}
console.log(s)