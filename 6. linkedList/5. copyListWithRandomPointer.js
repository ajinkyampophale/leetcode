// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 class NewNode {
  constructor(val){
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

const copyRandomList = (head) => {
 
  const visited = new Map(); // n
  let current = head;
  
  while(current){ // n
    const newNode = new NewNode(current.val); // n
    visited.set(current, newNode);
    current = current.next;
  }
  
  current = head;
  while(current){ // n
    
    const copiedNode = visited.get(current);
    const copiedNext = visited.get(current.next);
    const copiedRandom = visited.get(current.random);
    
    copiedNode.next = copiedNext || null;
    copiedNode.random = copiedRandom || null;
    
    current = current.next;
  }
  
  return visited.get(head);
};

// Time: O(n + n) = O(n)
// SpaceL O(n + n) = O(n);