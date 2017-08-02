function breakLoop(SLL){
    var walker = SLL.head; 
    var runner = SLL.head;
    var umpire = SLL.head;
    while (runner){
        if (runner.next == null){return false;}
        walker = walker.next;
        runner = runner.next.next; 
        if (walker == runner){
            umpire = umpire.next;
        }
        if (umpire == walker || umpire == runner){
            var ptr = umpire.next;
            while(ptr){
                if(ptr.next == umpire){
                    ptr.next = null;
                    return SLL;
                }
                else{
                    ptr = ptr.next;
                }
            }
        }
    }
    return false; 
}