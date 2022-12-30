// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class NewNode {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const getCarry = (num) => Math.floor(num / 10);
const getRemainder = (num) => Math.floor(num % 10);

const addTwoNumbers = (l1, l2) => {

  let carry = 0;
  let newList = null; // n + m
  let head = null;
    
  while(l1 || l2){ // n + m
      
    let val1 = 0, val2 = 0;

    if(l1) val1 = l1.val;
    if(l2) val2 = l2.val;
    
    const sum = val1 + val2 + carry;
    
    const remainder = getRemainder(sum);
    carry = getCarry(sum);

    const newNode = new NewNode(remainder);
    if(!newList){
      newList = newNode;
      head = newNode;
    }
    else{ 
      newList.next = newNode;
      newList = newList.next;
    }

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }

  if(carry > 0){
    const newNode = new NewNode(carry);
    newList.next = newNode;
  }
  
  return head;
};

// Time: O(n + m)
// Space: O(n + m)