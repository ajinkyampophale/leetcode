// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 const reorderList = (head) => {
  
  // find mid
  let slowPointer = head, fastPointer = head.next;
  
  while(fastPointer){ // n/2
    slowPointer = slowPointer.next;
    fastPointer = fastPointer?.next?.next;
  }

  let headSecondHalf = slowPointer.next;
  // point end of first half to null
  slowPointer.next = null;
  
  // reverse 2nd half
  let previous = null;
  
  while(headSecondHalf){ // n/2
    const temp = headSecondHalf.next;
    headSecondHalf.next = previous;
    previous = headSecondHalf;
    headSecondHalf = temp;
  }
  
  headSecondHalf = previous                                      
  
  let headFirstHalf = head;
  
  // merge both the halfs
  while(headSecondHalf){ // n/2
    
    const temp1 = headFirstHalf.next,
          temp2 = headSecondHalf.next;
    
    headFirstHalf.next = headSecondHalf;
    headSecondHalf.next = temp1;
    
    headFirstHalf = temp1;
    headSecondHalf = temp2;
  }
  
  return head;
};

// Time: O((n + n + n) / 2) = O(n)
// Space: O(1)