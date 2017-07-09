function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays == null){ return 0;} 
    if(arrayOfArrays.length == 0){ return 0;}
    var helper = [];
    for(var i = 0; i < arrayOfArrays.length; i++){
        if (arrayOfArrays[i] == null){return 0}
        helper.push(arrayOfArrays[i].length);
    }
    if (helper.indexOf(0) != -1){ return 0}
    helper.sort(function(a,b){return a - b});
    for(var i = 1; i < helper.length; i++){
        if(helper[i] != helper[i - 1] + 1){
            return helper[i - 1] + 1; 
        }
    }
}
