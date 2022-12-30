// const directions = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1]
// ];

// const bfs = (matrix, startRow, startCol) => {

//   const outerLength = matrix.length;
//   const innerLength = matrix[0].length;
//   const seen = new Array(outerLength).fill(0).map(ele => new Array(innerLength).fill(false));
//   const queue = [[startRow, startCol]];

//   while(queue.length > 0){

//     const current = queue.shift();
//     const row = current[0];
//     const col = current[1];
    
//     if(row < 0 || col < 0 || row >= outerLength || col >= innerLength || seen[row][col] || 
//       matrix[row][col] == 0){
//         continue;
//     }

//     seen[row][col] = true;
//     matrix[row][col] = 0;

//     for(let i = 0; i < directions.length; i++){
//       const dir = directions[i];

//       queue.push([row + dir[0], col + dir[1]]);
//     }
//   }

// }

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

const numberOfIslands = (matrix) => {
    
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

const matrix = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1]
];

// const matrix = [
//   [0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1],
//   [0, 1, 1, 1, 0],
//   [1, 0, 1, 0, 1]
// ];

// const matrix = [];

// const matrix = [[], []];

const result = numberOfIslands(matrix);
console.log({result});

// Time: O(n + n) = O(2n) = O(n) // n = rowLength * columnLength // Because bfs will run only 1 time for all the elements even if it is inside the loop
// Space: O(max(m, n)) // m = rowLength, n = columnLength

// Therefore,
// Time: O(m * n)
// Space: O(max(m, n))