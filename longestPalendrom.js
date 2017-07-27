function longestPal(str){
    var left= "";
    var right= "";
    var total= "";
    for (var i=0; i < str.length; i++){
        for (var j= i+1; j < str.length; j++){
            if (str[i] == str[j]){
                for (var k=i, l=j; k <= l; k++,l--){
                    if (str[k] != str[l]){
                        left = "";
                        right = "";
                        break;
                    }
                    left+= str[k];
                    right+= str[l];
                }
            }
        }
    }
    var temp;
    console.log(left);
    console.log(right);
    right= right.split();
    for (var i=0; i < right.length/2; i++){
        temp= right[i];
        right[i]= right[right.length-1-i];
        right[right.length-1-i]=temp;
    }
    right= right.join("");
    total= left+right;
    console.log(total)
}