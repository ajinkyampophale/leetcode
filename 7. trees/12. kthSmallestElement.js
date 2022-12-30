// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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
 * @param {number} k
 * @return {number}
 */
 const kthSmallest = (root, k) => {
  
  if(!root) return 0;
  
  let values = []; // n
  
  const dfs = (root) => {
    
    if(!root) return 0;
    
    dfs(root.left); // n
    values.push(root.val);
    dfs(root.right); // n
  }
  
  dfs(root);
  
  return values[k - 1];
}

// Time: O(n)
// Space: O(n + n) = O(n)