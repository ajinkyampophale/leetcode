// https://leetcode.com/problems/last-stone-weight/

class Heap {
  
  constructor(){
    this.heap = [];
  }
  
  swap(idx1, idx2){
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
  
  bubbleUp(){
    let currentIdx = this.heap.length - 1;
    
    while(currentIdx > 0){
     
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      
      if(this.heap[parentIdx] < this.heap[currentIdx]){
        this.swap(parentIdx, currentIdx);
        currentIdx = parentIdx;
      }
      else{
        break;
      }
    }
    
    return;
  }
  
  insert(val){
    this.heap.push(val);
    
    if(this.heap.length > 0){
      this.bubbleUp(); 
    }
  }
  
  sinkDown(){
    
    let currentIdx = 0;
    
    while(currentIdx < this.heap.length){
     
      const leftIdx = (2 * currentIdx) + 1;
      const rightIdx = (2 * currentIdx) + 2;
      
      if(this.heap[leftIdx] > this.heap[currentIdx]){
        
        if(this.heap[leftIdx] < this.heap[rightIdx]){
          this.swap(rightIdx, currentIdx);
          currentIdx = rightIdx;
        }
        else{
          this.swap(leftIdx, currentIdx);
          currentIdx = leftIdx;
        }
      }
      else if(this.heap[rightIdx] > this.heap[currentIdx]){
        this.swap(rightIdx, currentIdx); 
        currentIdx = rightIdx;
      }
      else{
        break;
      }
    }
    
    return;
  }
  
  remove(){
    
    this.swap(0, this.heap.length - 1);
    
    const ele = this.heap.pop();
    
    this.sinkDown();
    
    return ele;
  }
  
}

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
 
  const heap = new Heap(); // n
  
  for(const stone of stones){ // n
    heap.insert(stone); // logn
  }
  
  while(heap.heap.length > 1){
    const stone1 = heap.remove(); // logn
    const stone2 = heap.remove(); // logn
    
    if(stone1 - stone2 > 0){
      heap.insert(stone1 - stone2); //logn
    }
  }
  
  return heap.heap[0] || 0;
}

// Time: O(nlog(n))
// Space: O(n)