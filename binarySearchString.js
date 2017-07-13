function binarySearchOfString(str, char){
    var left= 0;
    var right= str.length - 1;
    var mid;
    while(right > left){
        console.log("left: " + left + " right: " + right);
        mid = Math.floor(left + (right - left) / 2);
        console.log("mid: " + mid);
        if (str[mid] == char){
            return true;
        }
        else if (char.charCodeAt() > str[mid].charCodeAt()){
            left = mid + 1; 
        }
        else if (char.charCodeAt() < str[mid].charCodeAt()){
            right = mid - 1; 
        }
    }
    if (char.charCodeAt() == str[left].charCodeAt()){
        return true;
    }
    return false; 
}