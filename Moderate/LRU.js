(function(){

    makePageReplacements("1231423",new lru(3));

})();

function makePageReplacements(str,cache){
    for(let ch of str.split("")){
        let num = parseInt(ch);
        cache.insert(num);
        cache.print();
        console.log(cache.size)
    }
}


function lru(capacity){
    this.hashMap = {};
    this.ll = new llDouble();
    this.size = 0;

    this.insert = function(val){
        if(this.hashMap.hasOwnProperty(val)){
            if(this.size == capacity && this.hashMap[val].next == null && this.hashMap[val].prev == null) this.ll.delete();
            this.ll.moveToRear(this.hashMap[val]);
        } else {
            if(this.size == capacity) this.ll.delete();
            else this.size++;
            this.hashMap[val] = this.ll.insert(val);
        }
    };

    this.print = function(){
        this.ll.print();
    };
}

function llDouble(){

    this.head = null;
    this.tail = null;
    this.insert = function(data){
        let node = new Node(data,null,this.tail);
        if(this.tail) this.tail.next = node;
        this.tail = node;
        if(!this.head) this.head = node;
        return node;
    };
    this.delete = function(){
        let node = this.head;
        if(this.head) this.head = this.head.next;
        if(this.head) this.head.prev = null;
        if(node) node.next = null;
        return node;
    };

    this.moveToRear = function(node){
        if(this.head == node) this.head = node.next;
        if(!!node.prev) node.prev.next = node.next;
        if(!!node.next) node.next.prev = node.prev;
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        node.next = null;
    };

    this.print = function(){
        let node = this.head,pv="";
        while(node!=null){
            pv+=node.data + "->"
            node = node.next;
        }
        console.log(pv.substr(0,pv.length-2));
    };

    function Node(data,next,prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}