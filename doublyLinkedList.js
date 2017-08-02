function Node(val){
    this.val = val;
    this.next = null; 
    this.prev = null;
}
function DLL(){
    this.head = null;
    this.tail = null;
    this.push = function(val){
        node = new Node(val);
        if (this.head == null){
            this.head = node;
            this.tail = node;
            return this; 
        }else{ 
            this.tail.next = node;
            var ptr = this.tail.next;
            ptr.prev = this.tail;
            this.tail = ptr;
            return this; 
        }
    }    
    this.pop = function(){
        if (!tail){
            return null;
        }
        if (tail.prev == null){
            var val = this.tail.val;
            this.head = null;
            this.tail = null;
            return val; 
        }
        var val = this.tail.val; 
        this.tail = this.tail.prev; 
        this.tail.next = null;
        return val; 
    }
}
    