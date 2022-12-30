// Full Binary Tree => It is a tree where each node either has 0 children or 2 children
// eg:
//      10
//  20      30
// n  n   40  50

// Complete Binary Tree => It is a tree where every level is completly full. 
//  Only level which cannot be full is the last level but the nodes in the last level should be 
//  pushed as far left as possible.
// eg:
//       10
//   20      30
// 60  70  40  50  

// eg2:
//       10
//   20      30
// 60  70  n    n

// eg3:
//       10
//   20      30
// 60   n  n    n


// calculate total no of nodes in complete binary with log(n) complexity
const getHeight = (root) => {
  let height = 0;

  while(root.left){
    height++;
    root = root.left;
  }

  return height;
}

// OR

// const getHeight = (root) => {
//   let height = 0;

//   const traverse = (node) => {
//     if(node.left) traverse(node.left);
//     height++;
//   }

//   traverse(root);
//   return height > 0 ? height - 1 : 0;
// }


const nodeExists = (root, idxToFind, height) => {

  let left = 0, right = Math.pow(2, height) - 1, count = 0;
 
  while(count < height){

    const mid = Math.ceil((left + right) / 2);
    
    if(idxToFind >= mid){
      left = mid;
      root = root.right;
    }
    else{
      right = mid - 1;
      root = root.left;
    }

    count++;
  }

  return root !== null;
}

const completeBinaryTree = (root) => {

  // 1. Calculate height (h).
  // 2. Calculate total no of nodes in all level except last level: (Formula: 2^h-1 - 1).
  // Formula Derivation: 
  // Level 1: 2^0 = 1 (no of nodes at each level), 
  // Level 2: 2^1 = 2, 
  // Level 3: 2^2 = 4, 
  // Level 4: 2^3 = 8
  // eg: Total nodes at level 3 = 8 - 1 = 7 (1 + 2 + 4 = 7)
  // Therefore, Total nodes at any level = total nodes at next level - 1
  // In our case 2nd last level, therefore 2^h-1 - 1

  // 3. For last level we will use binary search:
  // 3.a. Calculate mid point based on indexes (can use previous total as right index)
  // 3.b Check if mid exists then: shift left to mid else shift right to mid - 1
  // 3.c How to check if mid exists:
  //     - Run binary search again and check if newMid is greater than or equal to mid calculate above
  //     - If yes then traverse to right else traverse to left

  
  if(!root) return 0;

  // For calculating height will use dfs
  const height = getHeight(root);

  if(height === 0) return 1;

  const preNodesTotal = (Math.pow(2, height) - 1);

  let left = 0, right = preNodesTotal;

  while(left < right){

    const mid = Math.ceil((left + right) / 2);

    const isNode = nodeExists(root, mid, height);

    if(isNode){
      left = mid;
    }
    else{
      right = mid - 1;
    }
  }

  return preNodesTotal + left + 1;
}

// Time: O(log(n) * log(n)) = O(log^2(n))
// Space: O(1)

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
bst.insert(50);
bst.insert(30);
bst.insert(80);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(90);
bst.insert(10);
bst.insert(25);
bst.insert(35);
bst.insert(45);
bst.insert(65);
const root = bst.getRoot();
// console.log(root);

console.log(completeBinaryTree(root));