const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const bfs = (matrix, startRow, startCol) => {

  const outerLength = matrix.length;
  const innerLength = matrix[0].length;
  const queue = [[startRow, startCol]];
  let queueLength = queue.length;
  let distance = 1;
 
  while(queue.length > 0){

    if(queueLength === 0){
      distance++;
      queueLength = queue.length;
    }

    const current = queue.shift();
    const row = current[0];
    const col = current[1];

    for(let i = 0; i < directions.length; i++){
      const dir = directions[i];
      const nextRow = row + dir[0];
      const nextCol = col + dir[1];

      if(nextRow < 0 || nextCol < 0 || nextRow >= outerLength || nextCol >= innerLength || 
        matrix[nextRow][nextCol] < distance){
          continue;
      }

      queue.push([nextRow, nextCol]);
      matrix[nextRow][nextCol] = Math.min(distance, matrix[nextRow][nextCol]);
    }

    queueLength--;
  }

}


const dfs = (matrix, startRow, startCol, distance) => {

  distance++;
  const outerLength = matrix.length;
  const innerLength = matrix[0].length;

  for(let i = 0; i < directions.length; i++){
    const dir = directions[i];
    const nextRow = startRow + dir[0];
    const nextCol = startCol + dir[1];

    if(nextRow < 0 || nextCol < 0 || nextRow >= outerLength || nextCol >= innerLength || 
      matrix[nextRow][nextCol] < distance){
        continue;
    }
        
    matrix[nextRow][nextCol] = distance;
    dfs(matrix, nextRow, nextCol, distance);
  }
}

const wallsAndGates = (matrix) => {

  if(!matrix || matrix.length < 0) return [];

  for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[0].length; j++){

      if(matrix[i][j] == 0){
        // bfs(matrix, i, j);
        dfs(matrix, i, j, 0);
      }
    }
  }

  return matrix;
}

const matrix = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity]
];

// const matrix = [
//   [Infinity, -1, 0, Infinity],
//   [-1, Infinity, Infinity, -1],
//   [Infinity, -1, Infinity, -1],
//   [0, -1, Infinity, Infinity]
// ];

// const matrix = [];

// const matrix = [[]];

const result = wallsAndGates(matrix);
console.log(result);

// Time: O(n)
// Space: O(n)