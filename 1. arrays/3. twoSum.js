// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    
  if(nums.length <= 1) return [];
  
  
  // optimised using object {ele: index}
      
  const remainingObj = {};
  
  for(let i = 0; i < nums.length; i++){
      
      const ele = nums[i];
      
      if(remainingObj[ele] !== undefined) return [remainingObj[ele], i];
      else remainingObj[target - ele] = i;    
  }
  
  return [];
};

// Time: O(n)
// Space: O(n)


// brute force = 2 for loops
    
//     for(let i = 0; i < nums.length; i++){
            
//         const current = nums[i];
        
//         for(let j = i + 1; j < nums.length; j++){
                
//             const latter = nums[j];
            
//             if((current + latter) === target) return [i, j];
//         }  
//     }
    
//     return [];