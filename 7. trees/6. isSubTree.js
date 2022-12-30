// https://leetcode.com/problems/subtree-of-another-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 const isSameTree = (p, q) => {
  
  if(!p && !q) return true;
  
  if(p && q && p.val === q.val){
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
  }
  
  return false;
}

const isSubtree = (root, subRoot) => {
 
  if(!subRoot) return true;
  if(!root) return false;
  
  if(isSameTree(root, subRoot)){ // n
    return true;
  }
  
  return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)); // k
}

// Time: O(nk)
// Space: O(nk)