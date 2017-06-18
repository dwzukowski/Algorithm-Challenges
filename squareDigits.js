function squareDigits(num){
    var arr=[];
    var results="";
    var temp;
    while (num > 0) {
        arr.push(num%10);
        num = Math.floor(num/10);
    }
    for (var i=0; i < arr.length; i++){
        arr[i]*=arr[i];
    }
    for (var i=arr.length-1; i >= 0; i--){
      results+=arr[i]
    }
    return parseInt(results)
}