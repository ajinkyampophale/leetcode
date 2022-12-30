// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 class Node {
  constructor(val, left, right){
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

const buildTree = (preorder, inorder) => {
 
  if(!preorder.length || !inorder.length) return null;
  if(preorder.length !== inorder.length) return null;
  
  const root = new Node(preorder[0]);
  const mid = inorder.indexOf(preorder[0]); // n
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)); // n, n
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1)); // n, n
  return root;
}

// Time: O(n^2)
// Space: O(n^2)