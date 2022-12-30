// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
 const maxPathSum = (root) => {
 
  let result = -Infinity;
  
  const dfs = (root) => {
    
    if(!root) return 0;
    
    const left = dfs(root.left); // n
    const right = dfs(root.right); // n
    
    result = Math.max(result, 
                      left + right + root.val, 
                      left + root.val, 
                      right + root.val, 
                      root.val);
    
    return Math.max(left + root.val, right + root.val, 0);
  }
  
  dfs(root);
  
  return result;
}

// Time: O(n)
// Space: O(n)