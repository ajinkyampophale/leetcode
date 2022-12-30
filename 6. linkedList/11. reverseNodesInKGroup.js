// https://leetcode.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 class Node {
  constructor(val, next){
    this.val = val;
    this.next = next || null;
  }
}

const getKthElement = (current, k) => {
  while(current && k > 0){
    k--;
    current = current.next;
  }
  
  return current;
}

const reverseKGroup = (head, k) => {
 
  let dummy = new Node(-1, head),
      groupPrev = dummy;
  
  while(true){ // n => no of groups
    
    const kthElement = getKthElement(groupPrev, k); // m => no of elements
    
    if(!kthElement) break;
    
    const nextGroupStart = kthElement.next;
    let current = groupPrev.next, previous = nextGroupStart;
    
    while (current !== nextGroupStart){ // m
      const temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
     
    const tmp = groupPrev.next;
    groupPrev.next = kthElement;
    groupPrev = tmp;
  }
  
  return dummy.next;
}

// Time: O(n + 2m) = O(n + m)
// Space: O(1)