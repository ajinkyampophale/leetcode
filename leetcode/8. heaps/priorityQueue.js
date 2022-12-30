// min binary heap

// left = 2n + 1
// right = 2n + 2
// n (parent) = floor((left - 1)/2)

class PriorityQueue {

  constructor(){
    this.values = [];
  }

  swap(idx1, idx2){
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  bubbleUp(){
    let currentIndex = this.values.length - 1;

    while(currentIndex > 0){

      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if(this.values[currentIndex].priority < this.values[parentIndex].priority){
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      }
      else{
        break;
      }
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  sinkDown(){

    let currentIndex = 0;
    const lastArrIndex = this.values.length - 1;

    while(currentIndex < lastArrIndex){

      const leftIndex = (2 * currentIndex) + 1;
      const rightIndex = (2 * currentIndex) + 2;

      const currentValue = this.values[currentIndex]?.priority;
      const leftValue = this.values[leftIndex]?.priority;
      const rightValue = this.values[rightIndex]?.priority;

      // replace with whichever is greater left or right
      if(currentValue > leftValue){

        if(leftValue > rightValue){
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
        }
        else{
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        }
      }
      else if(currentValue > rightValue){
        this.swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      }
      else{
        break;
      }
    }
  }

  delete() {
        
    if(!this.values.length) return null; 
     
    // removes from top
    const lastArrIndex = this.values.length - 1;
    this.swap(0, lastArrIndex);
    
    const ele = this.values.pop();

    this.sinkDown();
    return ele;
  }

  getValues(){
    return this.values;
  }

}

console.clear();
const heap = new PriorityQueue();
heap.insert({priority: 10, value: "abc"})
heap.insert({priority: 20, value: "abc"});;
heap.insert({priority: 30, value: "abc"});
heap.insert({priority: 40, value: "abc"});
heap.insert({priority: 50, value: "abc"});
heap.insert({priority: 5, value: "abc"});
heap.insert({priority: 8, value: "abc"});
const values = heap.getValues();
console.log(values);

heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.delete();
const values2 = heap.getValues();
console.log(values2);