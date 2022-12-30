
// find minimum distance required to climb starting can climb one or 2 steps at a time

// brute-force approach
const climbingStairs = (costs) => {

  const n = costs.length;
  
  return Math.min(minCost(costs, n - 1), minCost(costs, n - 2));
}

const minCost = (costs, n) => {
  if(n < 0) return 0;
  if(n === 0 || n === 1) return costs[n];
 
  return costs[n] + Math.min(minCost(costs, n - 1), minCost(costs, n - 2));
}

const costs = [10, 20, 30, 5];
const result = climbingStairs(costs);
console.log({result});

// Time: O(2^n)
// Space: O(n)


// With memoization => Top Down
const climbingStairsMem = (costs) => {

  const n = costs.length;
  const memtable = [];
  
  return Math.min(minCostMem(costs, n - 1, memtable), minCostMem(costs, n - 2, memtable));
}

const minCostMem = (costs, n, memtable) => {
  if(n < 0) return 0;
  if(n === 0 || n === 1) return costs[n];

  if(memtable[n] !== undefined) return memtable[n];

  const minCost = costs[n] + Math.min(minCostMem(costs, n - 1, memtable), minCostMem(costs, n - 2, memtable))

  memtable[n] = minCost;
 
  return minCost;
}

const costsMem = [10, 20, 30, 5];
const resultMem = climbingStairsMem(costsMem);
console.log({resultMem});

// Time: O(n)
// Space: O(n)


// With tabulation => Bottom Up
const climbingStairsTab = (costs) => {

  const n = costs.length;
  let ele1 = costs[0];
  let ele2 = costs[1];

  for(let i = 2; i < n; i++){

    const current = costs[i] + Math.min(ele1, ele2);
    ele1 = ele2;
    ele2 = current;
  }

  return Math.min(ele1, ele2);
}

const costsTab = [10, 20, 30, 5];
const resultTab = climbingStairsTab(costsTab);
console.log({resultTab});

// Time: O(n)
// Space: O(1)