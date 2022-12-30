// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (matrix) => {
  
  const matrixLength = matrix.length,
        innerMatrixLength = matrix[0].length,
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  let count = 1;
  
  const traverse = (row, col) => {
    
    if(row < 0 || col < 0 || row >= matrixLength || col >= innerMatrixLength) return;
    
    matrix[row][col] = 0;
    
    for(const dir of directions){
      
      const nextRow = row + dir[0],
            nextCol = col + dir[1];
      
      if(matrix[nextRow]?.[nextCol] && matrix[nextRow][nextCol] != 0){
        count++;
        traverse(nextRow, nextCol);
      }
    }
  }
  
  let max = -Infinity;
  
  for(let i = 0; i < matrixLength; i++){ // n
    for(let j = 0; j < innerMatrixLength; j++){ // m
      
      if(matrix[i][j] != 0){
        traverse(i, j);
        max = Math.max(max, count); // i
        count = 1;
      }
    }
  }
 
  return max === -Infinity ? 0 : max;
}

// Time: O(n * m * i) => n - row, m - col, i - islandcount
// Space: O(n * m)