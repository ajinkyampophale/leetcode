// https://leetcode.com/problems/validate-binary-search-tree/

const isValidBST = (root) => {

  if(!root) return true;

  const traverse = (node, min, max) => {

    if(node.val <= min || node.val >= max){
      return false;
    }

    if(node.left){
      if(!traverse(node.left, min, node.val)){ // n
        return false;
      }
    }

    if(node.right){
      if(!traverse(node.right, node.val, max)){ // n
        return false;
      }
    }

    return true;
  }

  return traverse(root, -Infinity, +Infinity);
}

// Time: O(n)
// Space: O(n)