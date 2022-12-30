// https://leetcode.com/problems/kth-largest-element-in-a-stream/

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
    
    return ele;
  }
  
}

class KthLargest {
  
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums){
    this.k = k;
    this.heap = new Heap();
    
    for(const num of nums){
      this.add(num);
    }
  }

  
  /** 
   * @param {number} val
   * @return {number}
   */
  add(val) {
    
    this.heap.insert(val); // logn
    
    while(this.heap.heap.length > this.k){ // k
      this.heap.remove(); // logn
    }
    
    return this.heap.heap[0] || 0; 
  }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// Time: O(klog(n))
// Space: O(n)