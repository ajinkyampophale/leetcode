class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds item at the end
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Removes a item from the end
  pop(){
    if(!this.head) return undefined;

    const removedNode = this.tail;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;  
  }

  // Remove a element from start
  shift(){
    if(!this.head) return undefined;

    const removedNode = this.head;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  // Adds a element to the start
  unshift(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const maxSlidingWindow = function(nums, k) {

  let p1 = 0, p2 = 0, result = []; // n
  const queue = new DoublyLinkedList(); // n

  while(p2 < nums.length){ // n

    const current = nums[p2];

    while(queue.tail && nums[queue.tail.val] < current){ // 1
      queue.pop(); // remove from right
    }
      
    queue.push(p2); // insert from right

    if(p1 > queue.head.val){
      queue.shift(); // remove from left
    }

    if(p2 + 1 >= k){
      result.push(nums[queue.head.val]);
      p1++;
    }
    
    p2++;
  }

  return result;
}


// Time: O(n)
// Space: O(n + n) = O(n)



// Approach 1:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindowApproach1 = function(nums, k) {
  
  let p1 = 0, result = [], max = -Infinity, maxIndex = -Infinity; // n
  
  while(p1 < nums.length - k + 1){ // n
   
    if(maxIndex < p1){
      ({max, maxIndex} = getMax(nums, k, p1)); // k
    }
    else{
      const idx = p1 + k - 1;
      if(nums[idx] >= max){
        max = nums[idx];
        maxIndex = idx;
      }
    }
    
    result.push(max);
    p1++;
  }
    
  return result;
};

const getMax = (nums, k, p1) => {
  let max = -Infinity, maxIndex = -Infinity;
  
  for(let i = 0; i < k; i++){
    const idx = p1 + i;
    
    if(nums[idx] >= max){
      max = nums[idx];
      maxIndex = idx;
    }
  }
  
  return {max, maxIndex};
}

// Time: O(n*k)
// Space: O(n)