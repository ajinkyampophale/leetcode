// https://leetcode.com/problems/find-median-from-data-stream/

class MaxHeap {
  
  constructor(){
    this.heap = [];
    this.length = 0;
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
    
    this.length++;
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
    
    this.length--;
    
    return ele;
  }
  
}

class MinHeap {
  
  constructor(){
    this.heap = [];
    this.length = 0;
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
      
      if(this.heap[parentIdx] > this.heap[currentIdx]){
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
    
    this.length++;
  }
  
  sinkDown(){
    
    let currentIdx = 0;
    
    while(currentIdx < this.heap.length){
     
      const leftIdx = (2 * currentIdx) + 1;
      const rightIdx = (2 * currentIdx) + 2;
      
      if(this.heap[leftIdx] < this.heap[currentIdx]){
        
        if(this.heap[leftIdx] > this.heap[rightIdx]){
          this.swap(rightIdx, currentIdx);
          currentIdx = rightIdx;
        }
        else{
          this.swap(leftIdx, currentIdx);
          currentIdx = leftIdx;
        }
      }
      else if(this.heap[rightIdx] < this.heap[currentIdx]){
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
    
    this.length--;
    
    return ele;
  }
  
}


class MedianFinder {
  
  constructor(){
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }
  
  /** 
   * @param {number} num
   * @return {void}
   */
  addNum(num) {

    this.maxHeap.insert(num); // logn
    
    if(this.maxHeap.length && this.minHeap.length && 
       this.maxHeap.heap[0] > this.minHeap.heap[0]){
      
      const ele = this.maxHeap.remove(); // logn
      this.minHeap.insert(ele); // logn
    }
    
    if(this.maxHeap.length - 1 > this.minHeap.length){
      const ele = this.maxHeap.remove(); // logn
      this.minHeap.insert(ele); // logn
    }
    
    if(this.maxHeap.length < this.minHeap.length - 1){
      const ele = this.minHeap.remove(); // logn
      this.maxHeap.insert(ele); // logn
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    
    if(this.maxHeap.length > this.minHeap.length){
      return this.maxHeap.heap[0];
    }
    else if(this.maxHeap.length < this.minHeap.length){
      return this.minHeap.heap[0];
    }
    else{
      return (this.maxHeap.heap[0] + this.minHeap.heap[0]) / 2;
    }
  }
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// Time: add => O(7logn) = O(log(n)), findMedian => O(1)
// Space: add => O(n), findMedian => O(1)