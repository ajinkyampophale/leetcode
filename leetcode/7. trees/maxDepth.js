//                      10
//        20       30         40    50
//   60      70   n  80     n   n  n   n
//  n  n  90   100
//       n 110 n 120


// dfs
const maxDepth = (currentNode, count = 0) => {

  if(!currentNode){
    return count;
  }

  count++; // 1

  let left = maxDepth(currentNode.left, count);
  let right = maxDepth(currentNode.right, count);

  return Math.max(left, right);

  // 5

  // max(maxDepth(20, 1)), max(maxDepth(30, 1)) // 5, 3
  
  // max(maxDepth(60, 2)),  max(maxDepth(70, 2))   // 2, 5      max(maxDepth(null, 2))  max(maxDepth(80, 2)) // 3
  
  // max(maxDepth(null, 3)),  max(maxDepth(null, 3)) // 3, 5    max(maxDepth(null, 3)),  max(maxDepth(null, 3)) // 3
  // max(maxDepth(90, 3)),  max(maxDepth(100, 3)) // 3, 5

  // max(maxDepth(null, 4)),  max(maxDepth(110, 4)) // 4, 5
  // max(maxDepth(null, 4)),  max(maxDepth(120, 4)) // 4, 5

  // max(maxDepth(null, 5)),  max(maxDepth(null, 5))  // 5, 5
  // max(maxDepth(null, 5)),  max(maxDepth(null, 5)) // 5, 5
}

// Time: O(n)
// Space: Worst: O(n) 
//        Best: O(log(n))

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

console.log(maxDepth(bst.getRoot()));