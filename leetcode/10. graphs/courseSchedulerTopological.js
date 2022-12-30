// const courseScheduler = (courses, prerequisite) => {

//   const list = new Array(courses).fill(0).map(() => []);
//   const indegree = new Array(courses).fill(0);
  
//   // check who's indegree is 0
//   // reduce indegree of children once we visit that node

//   for(let i = 0; i < prerequisite.length; i++){ // p
    
//     const current = prerequisite[i];
//     const start = current[1];
//     const end = current[0];

//     list[start].push(end);
//     indegree[end]++;
//   }

//   const visited = {};

//   while(true){

//     // loop and find ele with 0 indegree
//     let current = -1;
    
//     for(let i = 0; i < indegree.length; i++){
//       if(indegree[i] === 0 && !visited[i]) current = i;
//     }

//     if(current === -1) break;

//     visited[current] = true;

//     const connections = list[current];

//     // get it's children and reduce their indegree
//     for(const connection of connections){
//       indegree[connection]--;
//     }
//   }

//   for(const ele of indegree){
//     if(ele > 0) return false;
//   }

//   return true;
// }


const courseScheduler = (courses, prerequisite) => {

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

// const prerequisite = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];

const prerequisite = [[0, 3], [1, 0], [2, 1], [4, 5], [6, 4], [5, 6]];

const result = courseScheduler(7, prerequisite);
console.log({result});

// Time: O(P + n^2)
// Space: O(n^2)