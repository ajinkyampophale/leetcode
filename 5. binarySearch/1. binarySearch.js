// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = (nums, target) => {
  
  if(nums.length <= 0) return -1;
  
  let left = 0, right = nums.length - 1;
  
  while(left <= right){
    
    let mid = Math.floor((left + right) / 2);

    if(nums[mid] === target) return mid;
    else if(nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
};

// Time: O(log(n))
// Space: O(1)