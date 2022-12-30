// https://leetcode.com/problems/k-closest-points-to-origin/

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
      
      if(this.heap[parentIdx]?.[0] < this.heap[currentIdx]?.[0]){
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
      
      if(this.heap[leftIdx]?.[0] > this.heap[currentIdx]?.[0]){
        
        if(this.heap[leftIdx]?.[0] < this.heap[rightIdx]?.[0]){
          this.swap(rightIdx, currentIdx);
          currentIdx = rightIdx;
        }
        else{
          this.swap(leftIdx, currentIdx);
          currentIdx = leftIdx;
        }
      }
      else if(this.heap[rightIdx]?.[0] > this.heap[currentIdx]?.[0]){
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
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  
  const heap = new MaxHeap(); // k + 1
  
  for(let i = 0; i < points.length; i++){ // n
    const point = points[i];
    
    const distance = Math.pow(point[0], 2) + Math.pow(point[1], 2);
    
    heap.insert([distance, ...point]); // logk
 
    if(i >= k){
      heap.remove(); // logk
    }
  }
  
  const result = []; // k
  
  for(const ele of heap.heap){ // k
    result.push([ele[1], ele[2]]); 
  }
  
  return result;
}

// Time: O(n * (logk + logk) + k) = O(nlog(k))
// Space: O(k + 1 + k) = O(k)