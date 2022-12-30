class PriorityQueue {

  constructor(comparator = (a, b) => a > b){
    this._heap = [];
    this.comparator = comparator;
  }

  size(){
    return this._heap.length;
  }

  // parent = floor((left - 1) / 2)
  // left = 2n + 1
  // right = 2n + 2

  _parent(idx){
    return Math.floor((idx - 1) / 2);
  }

  _left(idx){
    return (2 * idx) + 1;
  }

  _right(idx){
    return (2 * idx) + 2;
  }

  _compare(i, j){
    return this.comparator(this._heap[i], this._heap[j]);
  }

  _swap(idx1, idx2){
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }

  _bubbleUp(){
    
    let currentIdx = this.size() - 1;

    while(currentIdx > 0 && this._compare(currentIdx, this._parent(currentIdx))){
      const parentIdx = this._parent(currentIdx);
      this._swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  enqueue(val){
    this._heap.push(val);
    this._bubbleUp();
    return this;
  }

  _sinkDown(){

    let currentIdx = 0;
    const size = this.size() - 1;

    while((currentIdx < size) && 
      (
        this._compare(this._left(currentIdx), currentIdx) || 
        this._compare(this._right(currentIdx), currentIdx)
      )
    ){

      const leftChildIdx = this._left(currentIdx);
      const rightChildIdx = this._right(currentIdx);

      if(this._compare(leftChildIdx, currentIdx)){

        if(this._compare(rightChildIdx, leftChildIdx)){
          this._swap(rightChildIdx, currentIdx);
          currentIdx = rightChildIdx;
        }
        else{
          this._swap(leftChildIdx, currentIdx);
          currentIdx = leftChildIdx;
        }
      }
      else{
        this._swap(rightChildIdx, currentIdx);
        currentIdx = rightChildIdx;
      }
    }
  }

  dequeue(){

    if(!this.size()) return null;

    const size = this.size() - 1;

    this._swap(0, size);
    
    const poppedElement = this._heap.pop();

    this._sinkDown();

    return poppedElement;
  }

  getValues(){
    return this._heap;
  }

  isEmpty(){
    return this.size() === 0;
  }
}

// find if we can visit all nodes from  a given node k
const networkTimeDelay = (times, nodes, k) => {

  // nodes start with 1
  const list = new Array(nodes).fill(0).map(() => []); // n
  const distances = new Array(nodes).fill(Infinity); // n
  distances[k - 1] = 0;

  // convert to directed graph
  for(let i = 0; i < times.length; i++){ // e

    const current = times[i];
    const start = current[0] - 1;
    const end = current[1] - 1;
    const weight = current[2];

    list[start].push([end, weight]);
  }

  // apply dijkstra algo
  const queue = new PriorityQueue((a, b) => distances[a] < distances[b]);
  queue.enqueue(k - 1);

  while(!queue.isEmpty()){ // e

    const current = queue.dequeue(); // log(n)
    const connections = list[current];

    const currentWeight = distances[current];

    for(let i = 0; i < connections.length; i++){

      const connection = connections[i];
      const vertex = connection[0];
      const weight = connection[1];
      const newWeight = currentWeight + weight

      if(newWeight < distances[vertex]){
        distances[vertex] = newWeight;
        queue.enqueue(vertex); // log(n)
      }
    }
  }

  const max = Math.max(...distances);

  return max === Infinity ? -1 : max;
}


// const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]];
// const nodes = 5;

// const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [3, 1, 5]];
// const nodes = 5;

const times = [[1, 2, 9], [1, 4, 2], [4, 2, 4], [5, 3, 7]];
const nodes = 5;

const result = networkTimeDelay(times, nodes, 1);
console.log({result});


// Time: O(2n + e + e.log(n) + n.log(n)) = O(e.log(n))
// Space: O(list + queue) = O(e + n)