// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = (nums) => {
 
  const result = [];
  
  const dfs = (arr, set) => {
    
    if(arr.length === nums.length){
      result.push([...arr]); // n
      return;
    }
    
    for(let i = 0; i < nums.length; i++){ // n
      
      if(!set.has(i)){
        arr.push(nums[i]);
        set.add(i);
        dfs(arr, set);
        arr.pop();
        set.delete(i);
      }
      
    }
  }
  
  dfs([], new Set());
  
  return result;
}

// Time: O(n * n!)
// Space: O(n)