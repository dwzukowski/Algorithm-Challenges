//given a stack of integers, for each integer flip any adjacent values that are number +/- 1; if stack has odd number of values; ignore first number 

function switchPairs(stack){
    var queue = new queue();
    var count = stack.size();
    if(count % 2 == 1){
        queue.enqueue(Stack.pop());
    }
    while(! stack.isEmpty()){
        var temp = stack.pop();
        if(temp == stack.top()-1 || temp == stack.top()+1){
            queue.enqueue(stack.pop());
            queue.enqueue(temp);
        }
        else{
            queue.enqueue(temp);
        }
    }
    //instantiate while loop to return queued items to stack in original order with pairs switched
    while(! queue.isEmpty()){
        for(var i = 0; i < queue.size() - 1; i++){
            queue.enqueue(queue.dequeue());
        }
        stack.push(queue.dequeue());
    }
    return stack; 
}