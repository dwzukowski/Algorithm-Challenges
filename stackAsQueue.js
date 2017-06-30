function StackQueue(){
    this.stack1= new SLStack();
    this.stack2= new SLStack();
    this.enqueue= function(val){
        this.stack1.push(val);
        return this;
    }
    this.dequeue= function(){
        while(! this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.pop()
        while(! this.stack2.isEmpty()){
            this.stack1.push(this.stack2.pop())
        }
        return this;
    }
}