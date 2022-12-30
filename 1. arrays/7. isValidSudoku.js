// https://leetcode.com/problems/valid-sudoku/submissions/
/**
 * @param {character[][]} board
 * @return {boolean}
 */

 const getBoxId = (row, col) => {
  const rown = Math.floor(row / 3);
  const coln = Math.floor(col / 3) * 3;
  return rown + coln;
}

const isValidSudoku = function(board) {
  
  // check if row is valid
  // check if column is valid
  // check if box is valid
  
  // maintain list of visited row nodes, column nodes and box nodes
  // traverse all the nodes
  // get box id
  // check if it is already present in visited
  
  // visited = [
  //  0  {0: true, 1: true}, 
  //  1  {5: true, 9: true}
  // ]
  
  const rowVisited = new Array(board.length).fill(0).map(() => new Object()); // n * m
  const colVisited = new Array(board[0].length).fill(0).map(() => new Object()); // n * m
  const boxVisited = new Array(board.length).fill(0).map(() => new Object()); // n * m
  
  const boardLength = board.length;
  
  let row = 0, col = 0;
  
  while(true){ // n * m

      if(row >= boardLength) break;
      
      if(col >= boardLength){
          row++;
          col = 0;
          continue;
      }
  
      const current = board[row][col];
      const boxId = getBoxId(row, col);
      
      if(rowVisited[row][current] !== undefined || colVisited[col][current] !== undefined || boxVisited[boxId][current] !== undefined) {
          return false;
      }
      else if(current !== '.'){
          rowVisited[row][current] = true;
          colVisited[col][current] = true;
          boxVisited[boxId][current] = true;   
      }
      
      col++;
  }

  return true;
};

// Time: O(n * m)
// Space: O((n * m) + (n * m) + (n * m)) = O(3(n * m)) = O(n * m)