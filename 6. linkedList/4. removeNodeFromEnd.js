// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 const removeNthFromEnd = (head, n) => {
  
  let length = 0;
  let current = head;
  
  while(current){ // n
    length++;
    current = current.next;
  }

  let indexToRemove = length - n;
  
  if(indexToRemove <= 0){
    head = head.next || null;
    return head;
  }
  
  let traverse = head;
  
  let i = 1;
  while(i < indexToRemove){ // n - indexofelement
    i++;
    traverse = traverse.next;
  }
  
  const temp = traverse.next;
  traverse.next = temp.next;
  temp.next = null;
  
  return head;
};

// Time: O(n + n) = O(n)
// Space: O(1)