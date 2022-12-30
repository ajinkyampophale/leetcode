const numIslands = (matrix) => {
  
  const matrixLength = matrix.length,
        innerMatrixLength = matrix[0].length,
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  const traverse = (row, col) => {
    
    if(row < 0 || col < 0 || row >= matrixLength || col >= innerMatrixLength) return;
    
    matrix[row][col] = 0;
    
    for(const dir of directions){
      
      const nextRow = row + dir[0],
            nextCol = col + dir[1];
      
      if(matrix[nextRow]?.[nextCol] && matrix[nextRow][nextCol] != 0){
        traverse(nextRow, nextCol);
      }
    }
  }
  
  let islandCount = 0;
  
  for(let i = 0; i < matrixLength; i++){ // n
    for(let j = 0; j < innerMatrixLength; j++){ // m
      
      if(matrix[i][j] != 0){
        islandCount++;
        traverse(i, j); // i
      }
    }
  }
 
  return islandCount;
}

// Time: O(n * m * i) => n - row, m - col, i - islandcount
// Space: O(n * m)

// OR

const bfs = (matrix, startRow, startCol) => {

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; 
  const outerLength = matrix.length;
  const innerLength = matrix[0].length;
  const queue = [[startRow, startCol]];
  matrix[startRow][startCol] = 0;

  while(queue.length > 0){

    const current = queue.shift();
    const row = current[0];
    const col = current[1];

    for(let i = 0; i < directions.length; i++){
      const dir = directions[i];
      const newRow = row + dir[0];
      const newCol = col + dir[1];

      if(newRow < 0 || newCol < 0 || newRow >= outerLength || newCol >= innerLength || 
        matrix[newRow][newCol] == 0){
        continue;
      }

      queue.push([newRow, newCol]);
      matrix[newRow][newCol] = 0;
    }
  }

}

const numIslandsBfs = (matrix) => {
    
  if(!matrix || matrix.length <= 0) return 0;

  const outerLength = matrix.length;
  const innerLength = matrix[0].length;
  let count = 0;

  // 1. Sequential search
  for(let i = 0; i < outerLength; i++){

    for(j = 0; j < innerLength; j++){

      if(matrix[i][j] != 0){
        count++;
        
        // 2. Traverse and replace with 0
        bfs(matrix, i, j);
      }
    }
  }

  return count;
}