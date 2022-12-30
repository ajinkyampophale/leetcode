// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsetsWithDup = (nums) => {
  
  nums.sort((a, b) => a - b);
  
  const result = [];
  
  const dfs = (idx, arr) => {
    
    result.push([...arr]); // n
    
    if(idx >= nums.length) return;

    for(let i = idx; i < nums.length; i++){
      
      if(i > idx && nums[i] === nums[i - 1]) continue;
      
      arr.push(nums[i]);
      dfs(i + 1, arr); // 2^n
      arr.pop();
    }
    
  }
  
  dfs(0, []);
  
  return result;
}

// Time: (n * 2^n)
// Auxilary Space: O(n)
// Space: O(n * 2^n) // to store subsets
