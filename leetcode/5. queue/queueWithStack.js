// implement queue with stacks
class Queue {

  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val){
    this.stack1.push(val);
    return this.stack1;
  } 

  dequeue(){

    if(this.stack2.length === 0){

      if(this.stack1.length === 0) return null;

      while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  peek(){

    if(this.stack2.length === 0){

      if(this.stack1.length === 0) return null;

      while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2[this.stack2.length - 1];
  }

  empty(){
    if(this.stack1.length === 0 && this.stack2.length === 0) return true;
    return false;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.empty());
console.log(queue.peek());


// Space: O(n)
// Time: Enqueue: O(1)
//       Dequeue: O(n)
//       Peek: O(n)
//       Empty: O(1)