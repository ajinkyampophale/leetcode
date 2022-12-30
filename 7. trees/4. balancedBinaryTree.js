// https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
 const isBalanced = (root) => {
  
  if(!root) return true;
  if(!root.left && !root.right) return true;
  
  let result = true;
  
  const dfs = (root) => {
    
    if(!root) return 0;
    if(!result) return;
    
    const left = dfs(root.left); // n
    const right = dfs(root.right); // n
    
    if(Math.abs(left - right) > 1){
      result = false;
    }
    
    const height = Math.max(left, right) + 1;
 
    return height;   
  }
  
  dfs(root);
  
  return result;
};

// Time: O(n)
// Space: O(n)