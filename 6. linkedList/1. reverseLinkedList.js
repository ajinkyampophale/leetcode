// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = (head) => {

  let previous = null;
  
  while(head){ // n
    const temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
  
  return previous;
};

// Time: O(n)
// Space: O(1)