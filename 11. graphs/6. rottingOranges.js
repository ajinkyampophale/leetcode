const bfs = (matrix, queue, freshOrangeCount) => {
  
  const rowLength = matrix.length,
        colLength = matrix[0].length, 
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  let queueLength = queue.length,
      minutes = 0;
  
  while(queue.length > 0){ // n * m
    
    if(queueLength === 0){
      minutes++;
      queueLength = queue.length;
    }
    
    const current = queue.shift();
    
    for(const dir of directions){
      
      const nextRow = current[0] + dir[0],
            nextCol = current[1] + dir[1];
      
      if(nextRow < 0 || nextCol < 0 || nextRow >= rowLength || nextCol >= colLength || 
        matrix[nextRow][nextCol] !== 1) continue;
      
      matrix[nextRow][nextCol] = 2;
      queue.push([nextRow, nextCol]);
      freshOrangeCount--;
    }
      
    queueLength--;
  }
  
  return freshOrangeCount > 0 ? -1 : minutes;
}
      
const orangesRotting = (matrix) => {
  
  if(!matrix && matrix.length <= 0) return 0;
  
  const rowLength = matrix.length,
        colLength = matrix[0].length,
        queue = []; // n * m
  
  let freshOrangeCount = 0;
  
  for(let r = 0; r < rowLength; r++){ // n
    for(let c = 0; c < colLength; c++){ // m
     
      if(matrix[r][c] === 2){
        queue.push([r, c]);
      }
      
      if(matrix[r][c] === 1){
        freshOrangeCount++;
      }
    }
  }
  
  return bfs(matrix, queue, freshOrangeCount);
}

// Time: O(n * m)
// Space: O(n * m)