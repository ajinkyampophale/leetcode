// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const merge = (list1, list2) => { // n => list1.length + list2.length
  
  const head = new Node(-1);
  let current = head;
  
  while(list1 && list2){
    
    if(list1.val < list2.val){
      current.next = list1;
      list1 = list1.next;
    }
    else{
      current.next = list2;
      list2 = list2.next;
    }
    
    current = current.next;
  }
  
  if(list1){
    current.next = list1;
  }
  
  if(list2){
    current.next = list2;
  }
  
  return head.next;
}

const divide = (lists, start, end) => { // logk => no of recurssions, k => no of calls in stack
  
  if(start === end) return lists[start];
  
  const mid = Math.floor((start + end) / 2);
  const left = divide(lists, start, mid);
  const right = divide(lists, mid + 1, end);
  const mergedList = merge(left, right);
  return mergedList;
}

const mergeKLists = (lists) => {
  
  // merge sort
  // divide list
  // merge 2 sorted list
  
  if(!lists || lists.length <= 0) return null;  
  return divide(lists, 0, lists.length - 1); 
}

// Time: O(nlog(k))
// Space: O(k)