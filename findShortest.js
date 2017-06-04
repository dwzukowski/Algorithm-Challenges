function findShortest(s){
  var shortest=s.length;
  var splitStr= s.split(" ");
  for (var i=0; i < splitStr.length; i++){
    if(splitStr[i].length < shortest){
      shortest = splitStr[i].length;
    }
  }
  return shortest;
}