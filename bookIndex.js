function bookIndex (arr){
  var result = "";
  var start; 
  var end;
  var index="";
  for (var i = 0; i < arr.length; i++){
    if (arr[i] +1 == arr[i+1]){
      result=result+ arr[i]+ ",";
    } else {
      start = arr[i];
      for (var j= i+1; j < arr.length; j++){
        if (arr[j]+1 != arr[j]){
          end = arr[j];
          result= result+ start+ "-"+ end +",";
          i=j;
          break;
        }
      }
    }
  }
  for(i = 0 ; i < result.length-1; i++){
    index = index+ result[i];
  }
  return index;
}

bookIndex([1,2,3,5,10,11,12]);