function reverseStr(str){
    var newStr = str.split("");
    var temp;
    for(var i = 0; i < str.length/2; i++){
        temp = newStr[i];
        newStr[i] = newStr[newStr.length - 1 - i];
        newStr[newStr.length-1-i] = temp;
    }
    newStr = newStr.join("");
    return newStr;
}
reverseStr("creature")