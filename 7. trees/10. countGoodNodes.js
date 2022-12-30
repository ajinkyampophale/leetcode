// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
 * @return {number}
 */
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
 * @return {number}
 */
const goodNodes = (root) => {
  
  let result = 0;
  
  const dfs = (root, max) => {
    
    if(!root) return max;
    
    if(max <= root.val){
      result++;
    }
  
    max = Math.max(root.val, max);
    
    if(root.left) dfs(root.left, max);
    if(root.right) dfs(root.right, max); 
  }
  
  dfs(root, root.val);
  
  return result;
};

// Time: O(n)
// Space: O(n)