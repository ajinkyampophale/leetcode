const networkTimeDelay = (times, nodes, k) => {

  const distances = new Array(nodes).fill(Infinity); // n
  distances[k - 1] = 0;

  for(let i = 0; i < nodes - 1; i++){ // n
    
    let count = 0;

    for(let j = 0; j < times.length; j++){ // e

      const edge = times[j];
      const start = edge[0] - 1;
      const end = edge[1] - 1;
      const weight = edge[2];
      const newWeight = weight + distances[start];

      if(newWeight < distances[end]){
        distances[end] = newWeight;
        count++;
      }
    }

    if(count === 0) break;
  }

  const max = Math.max(...distances);

  return max === Infinity ? -1 : max;
}


// const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]];
// const nodes = 5;

// const times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [3, 1, 5]];
// const nodes = 5;

// const times = [[1, 2, 9], [1, 4, 2], [4, 2, 4], [5, 3, 7]];
// const nodes = 5;

const times = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6], [5, 3, 7], [3, 2, 3], [3, 1, 5]];
const nodes = 5;

const result = networkTimeDelay(times, nodes, 1);
console.log({result});


// Time: O(n + n*e) = O(n*e)
// Space: O(n)