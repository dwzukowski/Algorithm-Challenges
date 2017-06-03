//determine if a number is one digit or more than one digit
function isOneDigit(num){
    var result; 
    if(num-10 >=0){
        result= "number is more than one digit";
    }
    else {
        result= "number is one digit";
    }
    return result; 
}
//find the length of a number
function numLength(num){
    testvar= 10;
    numlen=1;
    while(num/testvar >=1){
    numlen++;
    testvar *= 10;
    }
    return numlen;
}