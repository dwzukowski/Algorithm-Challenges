//write methods for SLL class that find's kth Node from the end of the list and can shift the list to the right

//find kth node from end of list k=0 returns last node
this.klast = functoin (k){
    if(k > this.size()){return null;}
    var pointer = this.head;
    var i = 1;
    while (i < this.size()-k){
        pointer = pointer.next;
        i++;
    }
    return pointer; 
}

//shift right a given number of times
this.shiftRight = function (shiftBy){
    if (this.size() < 2){return this;}
    while (shiftBy > 0){
        var runner = this.klast(0);
        var walker = this.klast(1);
        runner.next = this.head;
        walker.next = null;
        this.head = runner;
        shiftBy--; 
    }
    return this; 
}