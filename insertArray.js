arr = [2,4,6]

function pushEnd(arr, newVal){
    for(i=arr.length - 1; i >=0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = newVal;
    return arr;
}


function popFront(arr){
    var popped = arr[0];
    for(var i= 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    console.log(arr);
    return popped;
}

function insertAt(arr, index, newVal){
    for(i = arr.length - 1; i >= index; i--){
        arr[i+1] = arr[i];
    }
    arr[index] = newVal;
    return arr;
}

function removeAt(arr,index){
    var removed = arr[index];
    for(var i=index; i < arr.length; i++){
        arr[index] = arr[index+1`]`]
    }
}