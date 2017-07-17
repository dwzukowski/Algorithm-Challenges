function reverseWords(str) {
    var newStr = ""
    var temp = str.split(" "); 
    for (var i=0; i < temp.length; i++){
        for (var j = temp[i].length-1; j >= 0; j--){
            newStr+= temp[i][j];
        }
        newStr= newStr + " "; 
        console.log(newStr);
    }
    return newStr;
}

reverseWords("this is a test");