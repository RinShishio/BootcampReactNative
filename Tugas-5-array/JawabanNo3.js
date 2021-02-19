function Range(startNum, finishNum, step){
    let arr = [];
    if (step == null) {
        step = 1
    }
    if (startNum < finishNum ) {
        for(let i = startNum; i <= finishNum; i+=step ){
            arr.push(i);
         }
    }else if (startNum > finishNum) {
        for(let i = startNum; i >= finishNum; i-=step ){
            arr.push(i);
         }
    }else if (startNum /= finishNum == step) {
        arr.push(1);
    }

    return arr;
  }
  function sum(arr){  
    var total = 0; // need to create a variable outside the loop scope
    for(var i in arr){  
       total = total+arr[i];  
    }
    return total;
}  
console.log(sum(Range(1,10,2))); // pass the array correctly 
console.log(sum(Range(1,10))) // 55
console.log(sum(Range(5, 50, 2))) // 621
console.log(sum(Range(15,10))) // 75
console.log(sum(Range(20, 10, 2))) // 90
console.log(sum(Range(1))) // 1
console.log(sum(Range())) // 0 