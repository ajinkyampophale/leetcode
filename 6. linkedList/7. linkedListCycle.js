// https://leetcode.com/problems/linked-list-cycle/

const hasCycleOptimised = (head) => {
  
  let fastPointer = head, slowPointer = head; 
  
  while(fastPointer && fastPointer.next){ // n
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    
    if(slowPointer === fastPointer){
      return true;
    }
  }
  
  return false;
};

// Time: O(n)
// Space: O(1)


const hasCycle = (head) => {
  
  const visited = new Map(); // n
  
  while(head){ // n
    
    if(visited.get(head)){
      return true;
    }
    
    visited.set(head, true);
    head = head.next;
  }
  
  return false;
};

// Time: O(n)
// Space: O(n)