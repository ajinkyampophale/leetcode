class PriorityQueue {

  constructor(comparator = (a, b) => a > b){
    this._heap = [];
    this.comparator = comparator;
  }

  size(){
    return this._heap.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  peek(){
    return this._heap[0];
  }

  _compare(i, j){
    return this.comparator(this._heap[i]?.priority, this._heap[j]?.priority);
  }

  _swap(idx1, idx2){
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }

  _parent(idx){
    return Math.floor((idx -1) / 2);
  }

  _leftChild(idx){
    return (2 * idx) + 1;
  }

  _rightChild(idx){
    return (2 * idx) + 2;
  }

  bubbleUp(){
    let currentIndex = this.size() - 1;

    while(currentIndex > 0 && this._compare(currentIndex, this._parent(currentIndex))){  
      const parentIndex = this._parent(currentIndex); 
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  push(val) {
    this._heap.push(val);
    this.bubbleUp();
    return this;
  }

  sinkDown(){

    let currentIndex = 0;
    const lastArrIndex = this.size() - 1;

    while(currentIndex < lastArrIndex){

      const leftIndex = this._leftChild(currentIndex);
      const rightIndex = this._rightChild(currentIndex);

      // replace with whichever is greater left or right
      if(this._compare(leftIndex, currentIndex)){

        if(this._compare(rightIndex, leftIndex)){
          this._swap(rightIndex, currentIndex);
          currentIndex = rightIndex;
        }
        else{
          this._swap(leftIndex, currentIndex);
          currentIndex = leftIndex;
        }
      }
      else if(this._compare(rightIndex, currentIndex)){
        this._swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      }
      else{
        break;
      }
    }
  }

  pop() {
        
    if(!this.size()) return null; 
     
    // removes from top
    const lastArrIndex = this.size() - 1;
    this._swap(0, lastArrIndex);
    
    const ele = this._heap.pop();

    this.sinkDown();
    return ele;
  }

  getValues(){
    return this._heap;
  }

}

console.clear();
const heap = new PriorityQueue((a, b) => a < b);
heap.push({priority: 10, value: "abc"})
heap.push({priority: 20, value: "abc"});;
heap.push({priority: 30, value: "abc"});
heap.push({priority: 40, value: "abc"});
heap.push({priority: 50, value: "abc"});
heap.push({priority: 5, value: "abc"});
heap.push({priority: 8, value: "abc"});
const values = heap.getValues();
console.log(values);

heap.pop();
heap.pop();
heap.pop();
heap.pop();
heap.pop();
heap.pop();
heap.pop();
heap.pop();
heap.pop();
const values2 = heap.getValues();
console.log(values2);