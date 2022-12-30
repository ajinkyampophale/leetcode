
const getBoxId = (row, col) => {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return rowVal + colVal;
}

const sudokuSolver = (board) => {

  const n = board.length;
  const visitedRows = new Array(n);
  const visitedCols = new Array(n);
  const visitedBoxes = new Array(n);

  for(let i = 0; i < n; i++){
    visitedRows[i] = {};
    visitedCols[i] = {};
    visitedBoxes[i] = {};
  }

  for(let r = 0; r < n; r++){
    for(let c = 0; c < n; c++){

      if(board[r][c] !== '.'){

        const current = board[r][c];
        visitedRows[r][current] = true;
        visitedCols[c][current] = true;
        
        const boxId = getBoxId(r, c);
        visitedBoxes[boxId][current] = true;
      }
    }
  }

  // add to grid, check is valid, if not backtrack
  solveBacktrack(board, visitedRows, visitedCols, visitedBoxes, 0, 0);
}


// check if sudoku is valid or not
const isValid = (row, col, box, value) => {

  if(row[value] || col[value] || box[value]) return false;

  return true;
}

const solveBacktrack = (board, visitedRows, visitedCols, visitedBoxes, startRow, startCol) => {

  if(startRow === board.length || startCol === board[0].length){
    return true;
  }
  else{

    if(board[startRow][startCol] === '.'){

      for(let num = 1; num <= 9; num++){

          // add
        const numVal = num.toString();
        board[startRow][startCol] = numVal;
        const boxId = getBoxId(startRow, startCol);

        const row = visitedRows[startRow];
        const col = visitedCols[startCol];
        const box = visitedBoxes[boxId];

        // decision
        if(isValid(row, col, box, numVal)){
          row[numVal] = true;
          col[numVal] = true;
          box[numVal] = true;

          if(startCol === board[0].length - 1){
            if(solveBacktrack(board, visitedRows, visitedCols, visitedBoxes, startRow + 1, 0)){
              return true;
            }
          }
          else{
            if(solveBacktrack(board, visitedRows, visitedCols, visitedBoxes, startRow, startCol + 1)){
              return true;
            }
          }

          // remove
          delete row[numVal];
          delete col[numVal];
          delete box[numVal];
        }

        board[startRow][startCol] = '.';
      }

    }
    else{
      
      if(startCol === board[0].length - 1){
        if(solveBacktrack(board, visitedRows, visitedCols, visitedBoxes, startRow + 1, 0)){
          return true;
        }
      }
      else{
        if(solveBacktrack(board, visitedRows, visitedCols, visitedBoxes, startRow, startCol + 1)){
          return true;
        }
      }
    }
  }

  return false;
}


const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

sudokuSolver(board);
console.log(board);


// Time: O((9!)^9) / O((n!)^m)
// Space: O(1)