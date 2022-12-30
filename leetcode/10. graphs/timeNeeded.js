let maxDistance = 0;

const dfs = (list, informTime, headId, distance) => {

  const connections = list[headId];
  const currentDistance = informTime[headId];
  distance += currentDistance;

  if(currentDistance === 0){
    maxDistance = Math.max(maxDistance, distance);
    distance = 0;
    return;
  }
  
  for(let i = 0; i < connections.length; i++){
    const connection = connections[i];
    dfs(list, informTime, connection, distance);
  }
}

const dfs2 = (list, informTime, headId) => {

  const connections = list[headId];

  if(connections.length === 0) return 0;

  let max = 0;
  
  for(let i = 0; i < connections.length; i++){
    const connection = connections[i];
    max = Math.max(max, dfs2(list, informTime, connection));
  }

  return informTime[headId] + max;
}

const timeNeeded = (n, headId, managers, informTime) => {

  const list = new Array(n).fill(0).map(() => new Array());

  for(let i = 0; i < managers.length; i++){
      
    const manager = managers[i];
    
    if(manager === -1) continue;
    
    list[manager].push(i);
  }

  // dfs(list, informTime, headId, 0);

  const maxDistance = dfs2(list, informTime, headId);

  return maxDistance;
}

const managers = [2, 2, 4, 6, -1, 4, 4, 5];
const informTime = [0, 0, 4, 0, 7, 3, 6, 0];
const headId = 4;

// const managers = [1, 2, 3, 4, 5, 6, -1];
// const informTime = [0, 6, 5, 4, 3, 2, 1];
// const headId = 6;

// const managers = [-1];
// const informTime = [0];
// const headId = 0;

const result = timeNeeded(managers, informTime, headId);
console.log({result});

// Time: O(n)
// Space: O(n)