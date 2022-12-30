// https://leetcode.com/problems/binary-tree-level-order-traversal/

const levelOrder = (root) => {
    
  if(!root) return [];

  const queue = [root];
  let queueLength = 0,
    result = [], // n
    innerArray = []; // n

  while(queue.length){ // n

    const current = queue.shift();

    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);

    innerArray.push(current.val);

    if(queueLength === 0){
      result.push(innerArray);
      innerArray = [];
      queueLength = queue.length;
    }
      
    queueLength--;
  }

  return result;
}

// Time: O(n)
// Space: O(n)