// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 const findOrder = (numCourses, prerequisites) => {

  const list = new Array(numCourses).fill(0).map(() => new Array()); // n + p
  const indegree = new Array(numCourses).fill(0); // n
  
  for(const [end, start] of prerequisites){ // p
    list[start].push(end);
    indegree[end]++; 
  }
  
  const stack = []; // n
  
  for(let i = 0; i < indegree.length; i++){ // n
    if(indegree[i] === 0) stack.push(i);
  }
  
  let count = 0;
  const result = [];
  
  while(stack.length > 0){ // n + p
    
    const curr = stack.pop();
    result.push(curr);
    
    for(const connection of list[curr]){
      indegree[connection]--;
      if(indegree[connection] === 0) stack.push(connection);
    }
    
    count++;
  }
  
  if(count === numCourses){
    return result;
  }
  else{
    return [];
  }
}

// Time: O(n + p), n => no of nodes, p => no of edges / prerequisites
// Space: O(n + p)
