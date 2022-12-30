
// using bfs
// levelOrder different implementation
const rightSideView = (root) => {

  if(!root) return [];

  const queue = [root], visited = [];

  while(queue.length){

    let counter = 0, queueLength = queue.length, lastEle = "";

    while(counter < queueLength){

      const current = queue.shift();

      if(current.left) queue.push(current.left);  
      if(current.right) queue.push(current.right);

      lastEle = current.val;

      counter++;
    }

    visited.push(lastEle);
  }

  return visited;
}

// dfs
const rightSideViewDfs = (root) => {

  if(!root) return [];

  const visited = [];

  const traverse = (current, level = 0) => {
      
    if(level >= visited.length){
      visited.push(current.val);
    }
    
    level++;

    if(current.right) traverse(current.right, level);
    if(current.left) traverse(current.left, level);
  }

  traverse(root);

  return visited;
} 

// Time: O(n)
// Space: O(n)

const preOrderFromRight = (root) => {

  const visited = [];

  const traverse = (current) => {
    visited.push(current.val);
    if(current.right) traverse(current.right);
    if(current.left) traverse(current.left);
  }

  traverse(root);

  return visited;
} 

const postOrderFromRight = (root) => {

  const visited = [];

  const traverse = (current) => {
    if(current.right) traverse(current.right);
    if(current.left) traverse(current.left);
    visited.push(current.val);
  }

  traverse(root);

  return visited;
} 

const inOrderFromRight = (root) => {

  const visited = [];

  const traverse = (current) => {
    if(current.right) traverse(current.right);
    visited.push(current.val);
    if(current.left) traverse(current.left);
  }

  traverse(root);

  return visited;
} 

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  insert(val){

    const newNode = new Node(val);

    if(!this.root){
      this.root = newNode;
      
    }
    else{

      let current = this.root;
      
      while(true){

        if(val === current.val){
          break;
        }
        else if(val < current.val){

          if(!current.left){
            current.left = newNode;
            break;
          }
          else{
            current = current.left;
          }
        }
        else{

          if(!current.right){
            current.right = newNode;
            break;
          }
          else{
            current = current.right;
          }
        }
      }
    }

    return this;
  }

  getRoot(){
    return this.root;
  }
}

const bst = new BinarySearchTree();
bst.insert(60);
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(40);
bst.insert(90);
bst.insert(70);
bst.insert(80);
bst.insert(100);
bst.insert(55);
const root = bst.getRoot();
console.log(root);

console.log(rightSideView(root));
console.log(rightSideViewDfs(root));

// console.log(inOrderFromRight(root));
// console.log(preOrderFromRight(root));
// console.log(postOrderFromRight(root));
