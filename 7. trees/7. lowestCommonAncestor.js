// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 const lowestCommonAncestor = (root, p, q) => {
  
  while(root){

    if(root.val < p.val && root.val < q.val){
      root = root.right;
    }
    else if(root.val > p.val && root.val > q.val){
      root = root.left;
    }
    else{
      return root;
    }
  }
}

// Time: O(log(n))
// Space: O(1)