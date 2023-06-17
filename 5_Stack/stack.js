class Stack{
    constructor(){
        this.items=[];
    }

    push(ele){
        return this.items.push(ele);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }
    popMuli(n){
        return this.items.splice(this.items.length-n,n);
    }

    pushMulti(arr){
        return this.items.splice(this.items.length,0,...arr);
    }
}

module.exports = {Stack};