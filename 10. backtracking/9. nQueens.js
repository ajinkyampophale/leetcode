// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
 const solveNQueens = (n) => {
 
  const col = new Set(),
        posDiag = new Set(),
        negDiag = new Set(),
        board = new Array(n).fill(0).map(() => new Array(n).fill('.')),
        result = [];
  
  const dfs = (r) => {
    
    if(r === n){
      const copy = [...board.map(ele => ele.join(""))];
      result.push(copy);
      return;
    }
    
    for(let c = 0; c < n; c++){
      if(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;
      
      col.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = "Q";
      
      dfs(r + 1);
      
      col.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = ".";
    }
    
  }
  
  dfs(0);
  
  return result;
}

// Time: O()