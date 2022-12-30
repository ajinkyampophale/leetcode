const bfs = (list) => {

  const queue = [0];
  const result = [];
  const visited = {};

  while(queue.length > 0){
    const current = queue.shift();
    const connections = list[current];
    result.push(current);
    
    visited[current] = true;
    
    for(const connection of connections){
      if(!visited[connection]){
        queue.push(connection);
      } 
    }
  }

  return result;
}

const dfs = (list, vertex, visited, result) => {

  const connections = list[vertex];
  visited[vertex] = true;
  result.push(vertex);

  for(const connection of connections){

    if(!visited[connection]){
      dfs(list, connection, visited, result);
    }
  }

  return result;
}

const bfsMatrix = (matrix) => {

  const queue = [0];
  const result = [];
  const visited = {};

  while(queue.length > 0){
    const current = queue.shift();
    const connections = matrix[current];
    result.push(current);
    
    visited[current] = true;
    
    for(let i = 0; i < connections.length; i++){
      if(connections[i] === 1 && !visited[i]){
        queue.push(i);
      } 
    }
  }

  return result;
}

const dfsMatrix = (list, vertex, visited, result) => {

  const connections = list[vertex];
  visited[vertex] = true;
  result.push(vertex);

  for(let i = 0; i < connections.length; i++){

    if(connections[i] === 1 && !visited[i]){
      dfsMatrix(list, i, visited, result);
    }
  }

  return result;
}

class Graph{

  constructor(useArray, size = 9){
    this.list = useArray ? [] : {};
    this.useArray = useArray;
    this.matrix = new Array(size).fill(0).map(() => new Array(size).fill(0));
  }

  addEgde(start, end){

    if(!this.list[start]) this.list[start] = []; 
    if(!this.list[end]) this.list[end] = [];

    this.list[start].push(end);
    this.list[end].push(start);
  }

  addEgdeMatrix(start, end){
    this.matrix[start][end] = 1;
    this.matrix[end][start] = 1;
  }

  getList(){
    return this.list;
  }

  getMatrix(){
    return this.matrix;
  }
}

const graph = new Graph(true);
graph.addEgde(0, 1);
graph.addEgde(0, 3);
graph.addEgde(3, 2);
graph.addEgde(3, 4);
graph.addEgde(3, 5);
graph.addEgde(2, 8);
graph.addEgde(4, 6);
graph.addEgde(6, 7);
const list = graph.getList();
console.log(list);

const bfsResult = bfs(list);
console.log(bfsResult);

const dfsResult = dfs(list, 0, {}, []);
console.log(dfsResult);

const graph2 = new Graph(true);
graph2.addEgdeMatrix(0, 1);
graph2.addEgdeMatrix(0, 3);
graph2.addEgdeMatrix(3, 2);
graph2.addEgdeMatrix(3, 4);
graph2.addEgdeMatrix(3, 5);
graph2.addEgdeMatrix(2, 8);
graph2.addEgdeMatrix(4, 6);
graph2.addEgdeMatrix(6, 7);
const matrix = graph2.getMatrix();
console.log(matrix);

const bfsResultMatrix = bfsMatrix(matrix);
console.log(bfsResultMatrix);

const dfsResultMatrix = dfsMatrix(matrix, 0, {}, []);
console.log(dfsResultMatrix);