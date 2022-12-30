
// bfs
const levelOrder = (root) => {
    
  if(!root) return [];

  const queue = [root], visited = [];
  let resetCounter = queue.length, 
    queueLength = queue.length;
  let innerArray = [];

  while(queue.length > 0){

    let current = queue.shift();
    
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
    
    innerArray.push(current.val);
    
    if(resetCounter === queueLength){
      resetCounter = 0;
      queueLength = queue.length - 1;
      visited.push(innerArray);
      innerArray = [];
    }
    else{
      resetCounter++;
    }
  }

  return visited;
}

// Time: O(n)
// Space: O(n)

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
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(40);
bst.insert(50);
bst.insert(60);
bst.insert(90);
bst.insert(70);
bst.insert(80);
console.log(bst.getRoot());

console.log(levelOrder(bst.getRoot()));