function r_factorial(n){
    if (n == 1){
        return n;
    }else{
        return n + r_factorial(n - 1);
    }
}

function r_fib(n){
    if (n == 0){return 0;}
    if (n == 1){return 1;}
    return r_fib(n - 1) + r_fib(n - 2); 
}