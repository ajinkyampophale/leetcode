// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum = (candidates, target) => {
 
  const result = [];
  
  const dfs = (idx, arr, target) => {
    
    if(target === 0){
      result.push([...arr]); // k
      return;
    }
    
    if(target < 0 || idx >= candidates.length) return;
    
    arr.push(candidates[idx]);
    dfs(idx, arr, target - candidates[idx]); // 2^t
    
    arr.pop();
    dfs(idx + 1, arr, target); // 2^t
  }
  
  dfs(0, [], target);
  
  return result;
}

// Time: O(k * 2^t) => t = target, k = length of combination generated
// Space: O(k * x) => k = length of combination generated, x = no of combinations generated