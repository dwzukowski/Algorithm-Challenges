function flatenArray(arr){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number" || typeof arr[i] == "string"){
            newArray.push(arr[i]);
        }
        if (Array.isArray(arr[i])){
            for (var j = 0; j < arr[i].length; j++){
                if (arr[i][j] != null){
                    newArray.push(arr[i][j]);
                }
            }
        }
    }
    return newArray; 
}