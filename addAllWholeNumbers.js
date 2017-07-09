function f(n){
    var sum = 0; 
    if(n <= 0){return false}
    if(typeof(n) != "number"){return false}
    if(n % 1 != 0){return false}
    for (var i= n; i > 0; i--){
        sum+= i; 
    }
    return sum; 
}