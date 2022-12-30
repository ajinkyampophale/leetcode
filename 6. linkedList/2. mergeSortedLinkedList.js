// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = (list1, list2) => {
  
  let head = null;  
  let newList = null;
  
  while(list1 && list2){
    
    if(list1.val < list2.val){
      
      if(!newList){
        newList = list1;
        head = newList;
      }
      else{
        newList.next = list1;
        newList = newList.next;
      }
      
      list1 = list1.next;
    }
    else{
      if(!newList){
        newList = list2;
        head = newList;
      }
      else{
        newList.next = list2;
        newList = newList.next;
      }
      
      list2 = list2.next;
    }

  }
  
  if(list1){
    if(!newList){
      newList = list1;
      head = newList;
    }
    else{
      newList.next = list1;
      newList = newList.next;
    }
  }
  
  if(list2){
    if(!newList){
      newList = list2;
      head = newList;
    }
    else{
      newList.next = list2;
      newList = newList.next;
    }
  }
  
  return head;
};

// Time: O(min(n, m)) => n = length of list1, m = > length of list2
// Space: O(1)