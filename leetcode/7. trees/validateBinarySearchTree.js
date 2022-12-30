// Need to compare parent with both left and right child

// Options
// BFS => Siblings => No
// DFS PreOrder => NLR
// DFS InOrder => LNR
// DFS PostOrder => LRN

const validateBinarySearchTree = (root) => {

  if(!root) return true;

  const traverse = (node, min, max) => {

    if(node.val <= min || node.val >= max){
      return false;
    }

    if(node.left){
      if(!traverse(node.left, min, node.val)){
        return false;
      }
    }

    if(node.right){
      if(!traverse(node.right, node.val, max)){
        return false;
      }
    }

    return true;
  }

  return traverse(root, -Infinity, +Infinity);
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

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
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

// console.log(validateBinarySearchTree(root));

const tree = new TreeNode(15);
tree.insert([1,1,1,1,1,1,1,1,1,1,1,null,null,null]);
console.log(validateBinarySearchTree(tree));