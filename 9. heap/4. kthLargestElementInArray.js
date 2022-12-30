// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const findKthLargestQuickSelect = (nums, k) => {
  
  const swap = (idx1, idx2) => {
    const temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
  
  // using quick select
  k = nums.length - k;
  
  const quickSelect = (left, right) => {
    
    let pivot = nums[right], pointer = left;
    
    for(let i = left; i < right; i++){
      
      if(nums[i] <= pivot){
        swap(i, pointer);
        pointer++;
      }
    }
    
    swap(right, pointer);
    
    if(k < pointer) return quickSelect(left, pointer - 1);
    else if(k > pointer) return quickSelect(pointer + 1, right); 
    else return nums[pointer];
  }
  
  return quickSelect(0, nums.length - 1);
}


// Time: Avg: O(n), Worst: O(n^2)
// Space: O(1)

class MaxHeap {
  
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  
  const heap = new MaxHeap(); // n
    
  for(let i = 0; i < nums.length; i++){ // n
    
    const num = nums[i];
    
    heap.insert(num); // logn
  }
  
  let result;
  
  for(let i = 0; i < k; i++){ // k
    result = heap.remove(); // logn
  }
  
  return result;
}

// Time: O(nlog(n) + klog(n)) = O(nlog(n))
// Space: O(n)