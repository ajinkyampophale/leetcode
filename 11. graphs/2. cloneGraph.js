// https://leetcode.com/problems/clone-graph/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

 class Node{
  constructor(val, neighbors){
    this.val = val;
    this.neighbors = neighbors || [];
  }
}

const cloneGraph = (node) => {
 
  const visited = new Map(); // n
  
  const clone = (node) => {
    
    if(visited.get(node)){
      return visited.get(node);
    }

    const newNode = new Node(node.val);
    visited.set(node, newNode);
    
    for(const neighbor of node.neighbors){
      newNode.neighbors.push(clone(neighbor));  // n  
    }
    
    return newNode;
  }
  
  if(node) return clone(node);
  else return null;
}

// Time: O(n), n = no of edges + no of nodes
// Space: O(n)