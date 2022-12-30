const directions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [2, -1],
  [2, 1],
  [1, -2],
  [1, 2]
];


const knightProbability = (boardSize, noOfSteps, knightRow, knightCol) => {

  if(knightRow < 0 || knightCol < 0 || knightRow >= boardSize || knightCol >= boardSize) return 0;
  if(boardSize <= 0) return 0;
  if(noOfSteps <= 0) return 1;
  if(boardSize === 1 || boardSize === 2) return noOfSteps === 0 ? 1 : 0;

  let result = 0;

  for(let i = 0; i < directions.length; i++){

    const nextRow = knightRow + directions[i][0];
    const nextCol = knightCol + directions[i][1];

    result += knightProbability(boardSize, noOfSteps - 1, nextRow, nextCol) / 8; 
  }
  
  return result;
}

const boardSize = 6;
const noOfSteps = 2;
const knightRow = 2;
const knightCol = 2;

console.log(knightProbability(boardSize, noOfSteps, knightRow, knightCol));

// Time: O(8^k)
// Space: O(8^k)


const knightProbabilityMem = (boardSize, noOfSteps, knightRow, knightCol) => {

  const dp = new Array(noOfSteps + 1).fill(0).map(() => 
    new Array(boardSize).fill(0).map(() => new Array(boardSize).fill(undefined))
  );

  const result = calculateProbabilityMem(boardSize, noOfSteps, knightRow, knightCol, dp)
  
  return result;
}

const calculateProbabilityMem = (boardSize, noOfSteps, knightRow, knightCol, dp) => {

  if(knightRow < 0 || knightCol < 0 || knightRow >= boardSize || knightCol >= boardSize) return 0;
  if(boardSize <= 0) return 0;
  if(noOfSteps <= 0) return 1;
  if(boardSize === 1 || boardSize === 2) return noOfSteps === 0 ? 1 : 0;

  if(dp[noOfSteps][knightRow][knightCol] !== undefined) return dp[noOfSteps][knightRow][knightCol];

  let result = 0;

  for(let i = 0; i < directions.length; i++){

    const nextRow = knightRow + directions[i][0];
    const nextCol = knightCol + directions[i][1];

    result += calculateProbabilityMem(boardSize, noOfSteps - 1, nextRow, nextCol, dp) / 8; 
  }

  dp[noOfSteps][knightRow][knightCol] = result;

  return result;
}

console.log(knightProbabilityMem(6, 2, 2, 2));

// Time: O(n^2 * k)
// Space: O(n^2 * k)


const knightProbabilityTab = (boardSize, noOfSteps, knightRow, knightCol) => {

  let prevDp = new Array(boardSize).fill(0).map(() => new Array(boardSize).fill(0));
  let currentDp = new Array(boardSize).fill(0).map(() => new Array(boardSize).fill(0));
  
  prevDp[knightRow][knightCol] = 1;

  for(let k = 1; k <= noOfSteps; k++){

    for(let row = 0; row < boardSize; row++){

      for(let col = 0; col < boardSize; col++){

        for(let d = 0; d < directions.length; d++){

          const prevRow = row + directions[d][0];
          const prevCol = col + directions[d][1];

          if(prevRow >= 0 && prevCol >= 0 && prevRow < boardSize && prevCol < boardSize){
            currentDp[row][col] += (prevDp[prevRow][prevCol] / 8);
          }
        }
      }
    }

    prevDp = currentDp;
    currentDp = new Array(boardSize).fill(0).map(() => new Array(boardSize).fill(0));
  }

  let result = 0;

  for(let i = 0; i < boardSize; i++){
    for(let j = 0; j < boardSize; j++){
      result += prevDp[i][j];
    }
  }

  return result;
}

console.log(knightProbabilityTab(6, 2, 2, 2));

// Time: O(n^2 * k)
// Space: O(n^2 * k)