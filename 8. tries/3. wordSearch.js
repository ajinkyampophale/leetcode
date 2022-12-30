/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 class Node {
  constructor(){
    this.childrens = {};
    this.isEnd = false;
  }
}

class Tries {
  
  constructor(){
    this.root = new Node();
  }
  
  insert(word){
    
    let current = this.root;
    
    for(let i = 0; i < word.length; i++){
     
      const letter = word[i];
      
      if(!current.childrens[letter]){
        const newNode = new Node();
        current.childrens[letter] = newNode;
      }

      current = current.childrens[letter];
    }
    
    current.isEnd = true;
    return;
  }
}


const findWords = (board, words) => {
 
  // form trie
  const tries = new Tries();
  for(const word of words){
    tries.insert(word);
  }
  
  const root = tries.root;

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  const boardLength = board.length,
        innerBoardLength = board[0].length,
        visited = new Set(),
        result = new Set();
  
  const dfs = (row, col, node, word) => {

    if(row < 0 || col < 0 || row >= boardLength || col >= innerBoardLength || 
       visited.has(`${row}${col}`) || !node.childrens || !node.childrens[board[row][col]]) return;
    
    visited.add(`${row}${col}`);
    node = node.childrens[board[row][col]];
    word += board[row][col];
    if(node.isEnd){
      result.add(word);
    }
    
    for(const dir of directions){
      dfs(row + dir[0], col + dir[1], node, word);
    }
    
    visited.delete(`${row}${col}`);
  }
  
  for(let i = 0; i < boardLength; i++){
    for(let j = 0; j < innerBoardLength; j++){
      dfs(i, j, root, "");
    }
  }
  
  return [...result];
}

// Time: O(mn*4^mn)
// Space: O(n)