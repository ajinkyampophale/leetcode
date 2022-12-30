// https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  
  const rowLength = heights.length,
        colLength = heights[0].length,
        pac = new Set(),
        alt = new Set();
  
  const dfs = (row, col, visit, prevHeight) => {
    
    if(row < 0 || col < 0 || row >= rowLength || col >= colLength || 
       visit.has(`${row}${col}`) || heights[row][col] < prevHeight) return;
    
    visit.add(`${row}${col}`);
    
    dfs(row - 1, col, visit, heights[row][col]);
    dfs(row, col + 1, visit, heights[row][col]);
    dfs(row + 1, col, visit, heights[row][col]);
    dfs(row, col - 1, visit, heights[row][col]);
  }
  
  for(let c = 0; c < colLength; c++){
    dfs(0, c, pac, heights[0][c]);
    dfs(rowLength - 1, c, alt, heights[rowLength - 1][c]);
  }
  
  for(let r = 0; r < rowLength; r++){
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, colLength - 1, alt, heights[r][colLength - 1]);
  }
  
  const result = [];
  
  for(let r = 0; r < rowLength; r++){
    for(let c = 0; c < colLength; c++){
      if(pac.has(`${r}${c}`) && alt.has(`${r}${c}`)){
        result.push([r, c]);
      }
    }
  }
  
  return result;
}