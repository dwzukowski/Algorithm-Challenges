function removeDuplicates(arr){
    var newArr = [arr[0]];
    for (var i = 1; i < arr.length; i++){
        for (var j = 0; j < newArr.length; j++){
            if (arr[i] == arr[j]){
                break;
            }
            if (j == newArr.length - 1){
                newArr.push(arr[i]);
                j++;
            }
        }
    }
    return newArr; 
}

function removeDuplicatesInPlace(arr){
    for (var i = 1; i < arr.length; i++){
        for (var j = 0; j < i; j++){
            if(arr[i] == arr[j]){
                for(var k = i; k < arr.length - 1; k++){
                    arr[k] = arr[k + 1];
                }
                arr.length-= 1 
            }
        }
    }
    return arr; 
}