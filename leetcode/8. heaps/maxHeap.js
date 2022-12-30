// max binary heap

class MaxBinaryHeap {

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

      // left = 2n + 1
      // right = 2n + 2
      // n (parent) = floor((left - 1)/2)

      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if(this.values[currentIndex] > this.values[parentIndex]){
        // swap
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

      // replace with whichever is greater left or right

      if(this.values[currentIndex] < this.values[leftIndex]){

        if(this.values[leftIndex] < this.values[rightIndex]){
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
        }
        else{
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        }
      }
      else if(this.values[currentIndex] < this.values[rightIndex]){
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

const heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(5);
heap.insert(8);
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

//     50
//   40     20
// 10 30   5  8

//      40
//   30     20
// 10   8   5 