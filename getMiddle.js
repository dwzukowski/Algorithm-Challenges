function getMiddle(s){
  var result;
  if(s.length % 2 === 0){
    result = s[s.length/2-1]+s[s.length/2];  
  }
  else if(s.length===1){
    result = s[0]  
  }
  else if(s.length%2 !== 0){
    result = s[Math.floor(s.length/2)]
  }
  return result;
}