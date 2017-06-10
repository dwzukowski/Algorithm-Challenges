function removeDuplicates(arr){
    for(var i= 0; i <arr.length; i++){
        if(arr[i] == arr[i+1]){
            for(var j=i+1; j < arr.length; j++)
                arr[j] = arr[j+1];
                arr.length-=1 
                i--
        }
    }
    return arr
}

function remDupes(arr){
    for(vari = arr.length-1; i>=0;i--){
        if(arr[i]==arr[i-1]{
            arr[i] = arr[arr.length-1]
            arr.length-=1
        })
    }
    return arr
}



