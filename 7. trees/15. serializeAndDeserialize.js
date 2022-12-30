// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const serialize = (root) => {

  const result = []; // n
  
  const dfs = (root) => {
    
    if(!root){
      result.push(null);
      return;
    }
    
    result.push(root.val);
    
    dfs(root.left); // n
    dfs(root.right); // n
  }

  dfs(root);
  
  return result.toString();
}

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
 
  const values = data.split(","); // n
  let i = 0;
 
  const dfs = () => {
    
    if(!values[i]){
      i++;
      return null;
    }
    
    let node = new Node(values[i]);
    i++;
    node.left = dfs(); // n
    node.right = dfs(); // n
    
    return node;
  }
  
  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Time: O(n)
// Space: O(n)