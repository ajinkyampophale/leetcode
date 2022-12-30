const bfs = (matrix, queue, noOfOne) => {
    
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; 
  const outerLength = matrix.length;
  const innerLength = matrix[0].length;

  let queueLength = queue.length;
  let minutesCount = 0;

  while(queue.length > 0){

    if(queueLength === 0){
      minutesCount++; 
      queueLength = queue.length;
    }

    const current = queue.shift();
    const row = current[0];
    const col = current[1];
    
    for(let i = 0; i < directions.length; i++){
      const dir = directions[i];
      const newRow = row + dir[0];
      const newCol = col + dir[1];
      
      if(newRow < 0 || newCol < 0 || newRow >= outerLength || newCol >= innerLength){
        continue;
      }
      
      if(matrix[newRow][newCol] == 1){
        noOfOne--;
        matrix[newRow][newCol] = 2;
        queue.push([newRow, newCol]);
      }
    }
    
    queueLength--;
  }

  return noOfOne > 0 ? -1 : minutesCount;
}

const rottingOranges = (matrix) => {

  if(!matrix || matrix.length <= 0) return 0;

  const outerLength = matrix.length;
  const innerLength = matrix[0].length;
  const queue = [];
  let noOfOne = 0;

  for(let i = 0; i < outerLength; i++){
    
    for(let j = 0; j < innerLength; j++){

      if(matrix[i][j] == 2){
        queue.push([i, j]);
      }

      if(matrix[i][j] == 1){
        noOfOne++;
      }
    }
  }

  return bfs(matrix, queue, noOfOne);
}

const matrix = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]
];

// const matrix = [
//   [1, 1, 0, 0, 0],
//   [2, 1, 0, 0, 0],
//   [0, 0, 0, 1, 2],
//   [0, 1, 0, 0, 1]
// ];

// const matrix = [];

// const matrix = [
//   [],
//   []
// ];

const result = rottingOranges(matrix);

console.log(result);

// Time: O(n)
// Space: O(n)