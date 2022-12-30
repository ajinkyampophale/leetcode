// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 const exist = (board, word) => {
  
  const boardLength = board.length,
        innerBoardLength = board[0].length,
        visited = new Set();
 
  const dfs = (row, col, i) => {
    
    if(i === word.length) return true;
    
    if(row < 0 || col < 0 || row >= boardLength || col >= innerBoardLength || 
       board[row][col] !== word[i] || visited.has(`${row}${col}`)) return false;
    
    visited.add(`${row}${col}`);
    
    let result = (
      dfs(row - 1, col, i + 1) ||
      dfs(row, col + 1, i + 1) ||
      dfs(row + 1, col, i + 1) ||
      dfs(row, col - 1, i + 1)
    )
    
    visited.delete(`${row}${col}`);
    
    return result;
  }
  
  for(let i = 0; i < boardLength; i++){
    for(let j = 0; j < innerBoardLength; j++){
      if(dfs(i, j, 0)) return true;
    }
  }
  
  return false;
}

// Time: O(n * m * 4^w) => n - rows, m - col, 4 - recursive calls, w - word length
// Space: 