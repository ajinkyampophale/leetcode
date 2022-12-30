// https://leetcode.com/problems/binary-tree-right-side-view/

const rightSideView = (root) => {

  if(!root) return [];
  
  const visited = [];

  const traverse = (current, level = 0) => { 
      
    if(level >= visited.length){
      visited.push(current.val);
    }

    if(level >= visited.length){
      visited.push(current.val);
    }

    // OR
    // if(visited[level] === undefined){
    //   visited.push(current.val);
    // }
    
    level++;

    if(current.right) traverse(current.right, level); // n
    if(current.left) traverse(current.left, level); // n
  }

  traverse(root);

  return visited;
}

// Time: O(n)
// Space: O(n)