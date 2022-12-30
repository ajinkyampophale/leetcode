//  https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums) {
    
  // store the visited array
  // loop over the array and check if present in visited return false else add to visited and continue
  
  const visited = {};
  
  for(let i = 0; i < nums.length; i++){  
      if(visited[nums[i]]) return true;
      else visited[nums[i]] = true;
  }
  
  return false;
};

// Time: O(n)
// Space: O(n)