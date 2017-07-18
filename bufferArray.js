//takes two arrays, start index for each array, and the number of values to copy from source to destination. Do not change length of dest array. 
function bufferArray(src, dest, srcStart, destStart, numVals){
    while (numVals > 0){
        if (dest.length <= destStart){
            destStart = 0; 
        }
        if (src.length <= srcStart){
            srcStart = 0;
        }
        dest[destStart] = src[srcStart];
        srtStart++;
        destStart++;
        numVals--;
    }
    return dest; 
}