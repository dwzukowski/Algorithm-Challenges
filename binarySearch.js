function binarySearch(arr, val){
    var left = 1;
    var right = arr.length; 
    var checkIndex;
    while (right >= left){
        checkIndex = Math.round(left + (right - left) / 2);
        console.log("check " + checkIndex)
        if (arr[checkIndex] == val){
            return true;
        }
        if (arr[checkIndex] < val){
            left = checkIndex + 1; 
        }
        else{
            right = checkIndex - 1; 
        }
        console.log("left " + left);
        console.log("right " + right);
    }
    if(arr[left] == val || arr[right] == val ){
        return true;
    }
    return false; 
}

