function reverseSLL(SLL){
    if(!SLL.head){
        return SLL;
    }
    var o_head = SLL.head;
    while(o_head.next){
        var temp = o_head.next;
        o_head.next = temp.next;
        temp.next = SLL.head;
        SLL.head = temp;
    }
    return SLL;
}