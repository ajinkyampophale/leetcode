// https://leetcode.com/problems/task-scheduler/

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

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  
  const charCount = {}; // n
  
  for(const task of tasks){ // n
    if(charCount[task]) charCount[task]++;
    else charCount[task] = 1;
  }
  
  const heap = new MaxHeap(); // n
  
  for(let key in charCount){ // 26
    heap.insert(charCount[key]); // log26
  }
  
  const queue = []; // n
  let time = 0;
  
  while(heap.length || queue.length){ // n + m
    
    time++;
    
    if(heap.length > 0){
      let count = heap.remove(); // log26
      count--;
      
      if(count > 0) queue.push([count, time + n])
    }
    
    if(queue?.[0]?.[1] === time){
      const [ele] = queue.shift(); 
      heap.insert(ele);
    }
  }
  
  return time;
}

// Time: O(n + 26log26 + n + (n + m)log26) = O(n + m) => n = no of tasks, m = ideal time
// Space: O(n + n + n) = O(n)