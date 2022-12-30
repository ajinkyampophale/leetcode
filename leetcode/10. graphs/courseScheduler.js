const bfs = (list, start) => {

  const queue = [start];
  const visited = {};

  while(queue.length > 0){

    const current = queue.shift();

    if(current === start && visited[current]) return false;

    const connections = list[current];
    visited[current] = true;

    for(const connection of connections){
      queue.push(connection);
    }
  }

  return true;
}

const courseScheduler = (courses, prerequisite) => {

  const list = new Array(courses).fill(0).map(() => new Array());

  for(const pre of prerequisite){

    const start = pre[1];
    const end = pre[0];

    list[start].push(end);
  }

  for(let i = 0; i < list.length; i++){
    const result = bfs(list, i);
    if(!result) return false;
  }

  return true;
}

// const prerequisite = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];

const prerequisite = [[0, 3], [1, 0], [2, 1], [4, 5], [6, 4], [5, 6]];

const result = courseScheduler(7, prerequisite);
console.log({result});

// Time: O(p + n^3)
// Space: O(n^2)