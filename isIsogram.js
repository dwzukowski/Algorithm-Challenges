function isIsogram(str){
  //begin with first letter in string, push it to new array
  //compare next letter to letters in new array, if no matches, push that letter to new array and continue
  //if there are matches, STOP, string is not an isogram 
    newArr = [str[0]]
    if (str.length == 0){
        return true
    }
    for(i=1; i < str.length; i++){
        for(j=0; j < newArr.length; j++){
            console.log("comparing "+newArr[j]+" to "+str[i])
            if (newArr[j].toLowerCase() === str[i].toLowerCase()) {
                console.log("they are the same")
                return false
             }
            console.log("not the same")
        }
        newArr.push(str[i])
    }
  return true 
}