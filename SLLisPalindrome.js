this.isPalindrom = function(){
    var ptr = this.head;
    var temp;
    var len = 0;
    var i = 0;
     //find length of SLL
    while(ptr){
        len++;
        ptr = ptr.next;
    }
    ptr = this.head;
    while(i < len/2){
        var ptrJr = this.head;
        for(var j = len - 1 - i; j > 0; j--){
            ptrJr = ptrJr.next;
        }
        if(ptr.val != ptrJr.val){return false;}
        ptr = ptr.next;
        i++;
    }
    return true; 
}
