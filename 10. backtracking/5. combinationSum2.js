// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum2 = (candidates, target) => {
  
  candidates.sort((a, b) => a - b);
  
  const result = [];
  
  const dfs = (idx, arr, target) => {
    
    if(target === 0){
      result.push([...arr]); // k
      return;
    }
    
    for(let i = idx; i < candidates.length; i++){
        
      if(i > idx && candidates[i] === candidates[i - 1]) continue;
      if(candidates[i] > target) break;
      
      arr.push(candidates[i]);
      dfs(i + 1, arr, target - candidates[i]); // 2^n => since unique subsequences
      arr.pop();
    } 
  }
  
  dfs(0, [], target);
  
  return result;
}

// Time: O(k * 2^n)
// Space: O(k * x) => k => length, x => no of combinations