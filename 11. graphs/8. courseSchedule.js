// https://leetcode.com/problems/course-schedule/

const canFinish = (courses, prerequisite) => {

  const list = new Array(courses).fill(0).map(() => []);
  const indegree = new Array(courses).fill(0);
  
  for(let i = 0; i < prerequisite.length; i++){
    
    const current = prerequisite[i];
    const start = current[1];
    const end = current[0];

    list[start].push(end);
    indegree[end]++;
  }

  const stack = [];
  let count = 0;

  for(let i = 0; i < indegree.length; i++){
    if(indegree[i] === 0) stack.push(i);
  }

  while(stack.length > 0){

    let current = stack.pop();
    const connections = list[current];

    for(const connection of connections){
      indegree[connection]--;
      if(indegree[connection] === 0) stack.push(connection);
    }
    
    count++;
  }
  
  return count === courses;
}

// Time: O(n + p), n => no of nodes, p => no of edges / prerequisites
// Space: O(n + p)