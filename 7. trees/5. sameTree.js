// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  
  if(!p && !q) return true;
  if(!p && q) return false;
  if(p && !q) return false;
  
  const pQueue = [p], qQueue = [q]; // n, m
  
  while(pQueue.length > 0 && qQueue.length > 0){ // min(n, m)
    
    const pCurrent = pQueue.shift(),
          qCurrent = qQueue.shift();
    
    if(pCurrent?.val !== qCurrent?.val || 
       pCurrent?.left?.val !== qCurrent?.left?.val || 
       pCurrent?.right?.val !== qCurrent?.right?.val){
      return false;
    }
    
    if(pCurrent.left) pQueue.push(pCurrent.left);
    if(pCurrent.right) pQueue.push(pCurrent.right);
    if(qCurrent.left) qQueue.push(qCurrent.left);
    if(qCurrent.right) qQueue.push(qCurrent.right);                                         
  }
  
  if(pQueue.length > 0 || qQueue.length > 0) return false;
 
  return true;
}

// Time: O(min(n, m))
// Space: O(min(n, m))