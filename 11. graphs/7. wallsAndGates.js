// https://www.lintcode.com/problem/663/


/**
 * @param rooms: m x n 2D grid
 * @return: nothing
 */
 const wallsAndGates = (rooms) => {
  
  const rowLength = rooms.length,
      colLength = rooms[0].length,
      directions = [[-1, 0], [0, 1], [1, 0], [0, -1]],
      queue = [], // n * m
      visited = new Set(); // n * m

  for(let r = 0; r < rowLength; r++){ // n
    for(let c = 0; c < colLength; c++){ // m
      if(rooms[r][c] === 0){
        queue.push([r, c]);
        visited.add(`${r}${c}`);
      }
    }
  }

  let distance = 0;

  while(queue.length > 0){ // n * m

    const queueLength = queue.length;

    for(let i = 0; i < queueLength; i++){

      const current = queue.shift(),
        r = current[0],
        c = current[1];
        
      rooms[r][c] = distance;

      for(const dir of directions){
        const nr = r + dir[0],
              nc = c + dir[1];

        if(nr < 0 || nc < 0 || nr >= rowLength || nc >= colLength || visited.has(`${nr}${nc}`) || 
          rooms[nr][nc] === -1) continue;
      
        queue.push([nr, nc]);
        visited.add(`${nr}${nc}`);
      }
    }
    
    distance++;
  }
  
  return rooms;
}

// Time: O(n * m)
// Space: O(n * m)

// OR

const wallsAndGatesDfs = (rooms) => {
  
  const rowLength = rooms.length,
      colLength = rooms[0].length,
      directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = new Set();

  const dfs = (r, c, count) => {

    if(r < 0 || c < 0 || r >= rowLength || c >= colLength || 
      visited.has(`${r}${c}`)) return;

    visited.add(`${r}${c}`);

    for(const dir of directions){
      const nr = r + dir[0],
            nc = c + dir[1];

      if(rooms[nr] && rooms[nr][nc] && rooms[nr][nc] !== 0 && rooms[nr][nc] !== -1){
        rooms[nr][nc] = Math.min(rooms[nr][nc], count + 1);
        dfs(nr, nc, count + 1);
      }
    }
  }

  for(let r = 0; r < rowLength; r++){ // n
    for(let c = 0; c < colLength; c++){ // m
      if(rooms[r][c] === 0){
        dfs(r, c, 0); // n * m
        visited = new Set();
      }
    }
  }

}

// Input:
// [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// Output:
// [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

// Input: [[0,-1],[2147483647,2147483647]]
// Output: [[0,-1],[1,2]]


// Time: O((n * m)^2)
// Space: O(n * m)