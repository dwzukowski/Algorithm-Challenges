//function takes two integers and returns greatest common factor
function r_greatestFactor(a, b){
    if (a === b){ return a;}
    if (a > b){
        return r_greatestFactor(a - b, b);
    }
    if (a < b){
        return r_greatestFactor(a, b - a);
    }
}

//refactored to use % instead of subtration
function r_greatestFactor2(a, b){
    if (a % b === 0){return b;}
    if (b % a === 0){return a;}
    if (a > b){
        return r_greatestFactor2(a % b, b);
    }
    else{
        return r_greatestFactor2(a, b % a);
    }
}

//test
console.log(r_greatestFactor2(10, 4) === 2);
console.log(r_greatestFactor(10, 4) === 2);
