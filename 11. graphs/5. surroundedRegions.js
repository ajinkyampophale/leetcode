// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const solve = function(board) {
 
  const rowLength = board.length,
        colLength = board[0].length,
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const dfs = (row, col) => {
    
    if(row < 0 || col < 0 || row >= rowLength || col >= colLength || board[row][col] !== "O") return;
    
    board[row][col] = "T";
    
    for(const dir of directions){
      dfs(row + dir[0], col + dir[1]);
    } 
  }
  
  // convert boarder O to T
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "O" && (r === 0 || c === 0 || r === rowLength - 1 || c === colLength - 1)){
        dfs(r, c); 
      }
    }
  }
  
  // convert all remaining O to X
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "O"){
        board[r][c] = "X"; 
      }
    }
  }
  
  // convert back T to O
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "T"){
        board[r][c] = "O"; 
      }
    }
  }
 
}

// Time: O(n * m)
// Space: O(1)

// OR

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const solve2 = function(board) {
 
  const rowLength = board.length,
        colLength = board[0].length,
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  
  const dfs = (row, col) => {
    
    if(row < 0 || col < 0 || row >= rowLength || col >= colLength) return;
    
    board[row][col] = "T";
    
    for(const dir of directions){
      const nextRow = row + dir[0], 
            nextCol = col + dir[1];
      
      if(board[nextRow] && board[nextRow][nextCol] === "O") dfs(nextRow, nextCol);
    } 
  }
  
  for(let c = 0; c < colLength; c++){
    if(board[0][c] === "O") board[0][c] = "T";
    if(board[rowLength - 1][c] === "O") board[rowLength - 1][c] = "T";
  }
  
  for(let r = 0; r < rowLength; r++){
    if(board[r][0] === "O") board[r][0] = "T";
    if(board[r][colLength - 1] === "O") board[r][colLength - 1] = "T";
  }
  
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "T"){
        dfs(r, c); 
      }
    }
  }
  
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "O"){
        board[r][c] = "X"; 
      }
    }
  }
  
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(board[r][c] === "T"){
        board[r][c] = "O"; 
      }
    }
  }
 
}