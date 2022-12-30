// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
 
  const result = [];
  
  const dfs = (idx, arr) => {
    
    if(idx >= nums.length){
      result.push([...arr]); // n
      return;
    }
    
    arr.push(nums[idx]);
    dfs(idx + 1, arr); // 2^n
    
    arr.pop()
    dfs(idx + 1, arr); // 2^n
  }
  
  dfs(0, []);
  
  return result;
}

// Time: O(n * 2^n) => n => number of calls, 2^n => number of subsets
// Space: O(n) => Because, maximum number of calls in call stack at a time will be equal to the input length. 