//instantiate singly linked list w/ one method
function SLL(){
    this.sayHi = function() {
        console.log('Hi');
    }
}

//declare a variable list which is a new SLL
var listy = new SLL();
//call the method sayHi on list
listy.sayHi()
//simplest posible SLL declaration
function SLL(){
    this.head=null;
}
//prototype can be used to add a method, when you add a function to a prototype that function is shared by every instance of the linked list. Each linked list doesn't needs to store its own functions
SLL.prototype.sayHi = function(){
    console.log('Hi');
}

//linked list has one known property: head node

function SLL(){
    this.head = null;
    //creating the method isEmpty which returns true if the list is empty. If head node is null, the list is empty 
    this.isEmpty = function(){
        if(this.head === null){
            return true;
        }
        else{
            return false; 
        }
    }
}

SLL.prototype.isEmpty = function(){
    if (this.head === null) {
        return true
    }
    else{
        return false
    }
}

SLL.prototype.size= function(){
    var current = this.head;
    var count=0;
    while (current !== null){
        count++;
        current = current.next;
    }
    return count
};

SLL.prototype.prepend= function(val) {
    var newNode= {
        val: val,
        next: this.head
    }
    this.head= newNode;
};

listy.prepend(10)
listy.prepend(12)
listy.prepend(14)
listy.head.val // -> 14
listy.head.next.val // -> 12
listy.head.next.next.val // -> 10

// pseudocode for append 
// 1. create a new node
// 2. traverse to end of list
// 3. make last node's next value point to new node
SLL.prototype.append = function(val){
    var newNode={
        val: val,
        next: null
    };
    //if list is empty, can just add node and exit the function 
    if (this.isEmpty()){
        this.head= newNode;
        return;
    }
    var current= this.head;
    while (current.next !== null){
        current= current.next;
    }
    current.next= newNode;
};

//contains method

SLL.prototype.contains = function(val){
    //runner used just like current or count to iterate through SLL, remember the only attribute of SLL is head so we have to start there and from there we can  only move to next 
    var runner = this.head;
    while (runner !== null){
        if (runner.val ===val){
            return true;
        }
    }
};


//remove value method

SLL.prototype.remove= function(val){
    //check if val is in the list
    
    if (this.head.val === val){

    }
}

this.showBack = function(){
    ptr= this.head;
    while(ptr.next != null){
        ptr= ptr.next;
    }
    return ptr.val;
}

this.removeBack= function(){
    ptr= this.head;
    while(ptr.next.next != null){
        ptr= ptr.next;
    }
    ptr.next= null;
    return this;
}

this.remove = function(val){
    pointer= this.head;
    while (pointer.next != null){
        if (pointer.next.val = val){
            pointer.next=pointer.next.next;
        }
        pointer= pointer.next;
    }
    pointer= this.head;
    if (pointer.val = val){
        this.head=pointer.next;
        pointer.next=null; 
    }
    return this; 
}



function SLL(){
    this.head=null;
};
SLL.prototype.size= function(){
    var current = this.head;
    var count=0;
    while (current !== null){
        count++;
        current = current.next;
    }
    return count
};
SLL.prototype.prepend= function(val) {
    var newNode= {
        val: val,
        next: this.head
    }
    this.head= newNode;
};
SLL.prototype.size= function(){
    var current = this.head;
    var count=0;
    while (current !== null){
        count++;
        current = current.next;
    }
    return count
};
listy.prepend(2)
listy.prepend(4)
listy.prepend(6)
listy.prepend(8)

SLL.prototype.remove = function(val){
    pointer= this.head;
    while (pointer.next !== null){
        if (pointer.next.val == val){
            pointer.next= pointer.next.next;
            
        }
        pointer= pointer.next;
    }
    pointer= this.head;
    if (pointer.val = val){
        this.head=pointer.next;
        pointer.next=null; 
    }
    return this; 
}