// https://leetcode.com/problems/diameter-of-binary-tree/

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
 const diameterOfBinaryTree = (root) => {
  
  if(!root) return 0;
  if(!root.left && !root.right) return 0;
  
  let diameter = -Infinity;
  
  const dfs = (root) => {
    
    if(!root) return 0;
    
    const left = dfs(root.left); // n
    const right = dfs(root.right); // n
    
    diameter = Math.max((left + right), diameter);
    const height = Math.max(left, right) + 1;
    
    return height;
  }
  
  dfs(root);
  
  return diameter;
};

// Time: O(n)
// Space: O(n)