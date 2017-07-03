function cirQueue(cap){
    var head= 0;
    var tail= 0;
    var capacity= cap;
    var arr= []
    this.front= function(){
        return arr[head];
    }
    this.isEmpty= function(){
        if (arr.length == 0){
            return true;
        }
        else{ return false }
    }
    this.isFull= function(){
        if (arr.length == capacity){
            return true;
        }
        else{ return false}
    }
    this.queueSize= function(){
        return arr.length;
    }
    this.enqueue= function(val){
        if this.isEmpty(){
            arr[head]=val;
            return this;
        }
        if this.isFull(){
            return false;
        }
        else{
            tail+= 1
            arr[tail]= val
            return this;
        }
    }
}