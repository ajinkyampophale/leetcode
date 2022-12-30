const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

const traverseMatrix = (matrix) => {

  const outerLength = matrix.length;
  const innerLength = matrix[0].length;
  const seen = new Array(outerLength).fill(0).map(ele => new Array(innerLength).fill(false));
  const values = [];
  const queue = [];
  
  queue.push([0, 0]);

  while(queue.length > 0){

    const current = queue.shift();
    const row = current[0];
    const col = current[1];

    if(row < 0 || col < 0 || row >= outerLength || col >= innerLength || seen[row][col]){
      continue;
    }

    values.push(matrix[row][col]);
    seen[row][col] = true;

    for(let i = 0; i < directions.length; i++){
      const dir = directions[i];
    
      queue.push([row + dir[0], col + dir[1]]);
    }
  }

  return values;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const result = traverseMatrix(matrix);

console.log(result);