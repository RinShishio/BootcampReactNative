function Range(startNum, finishNum){
    let arr = [];
    if (startNum < finishNum) {
        for(let i = startNum; i <= finishNum; i++){
            arr.push(i);
         }
    }else if (startNum > finishNum) {
        for(let i = startNum; i >= finishNum; i--){
            arr.push(i);
         }
    }else if (startNum == null || finishNum == null) {
        arr.push(-1);
    }else if (startNum == null && finishNum == null) {
        arr.push(-1);
    }
    return arr;
  }
  console.log("Jawaban No 1")
  console.log(Range(1, 10))
  console.log(Range(1))
  console.log(Range(11,18))
  console.log(Range(54,50))
  console.log(Range())