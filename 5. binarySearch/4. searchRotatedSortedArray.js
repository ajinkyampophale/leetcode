// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = (nums, target) => {
  
  let left = 0, right = nums.length - 1;
  
  while(left <= right){ // logn
    
    const mid = Math.floor((left + right) / 2);

    if(target === nums[mid]){
      return mid;
    }
    // check if in left sorted half
    else if(nums[left] <= nums[mid]){
      
      // left half
      if(nums[left] <= target && target < nums[mid]){
        right = mid - 1;
      }
      // right half
      else{
        left = mid + 1;  
      }
    }
    else{
      
      // right half
      if(nums[mid] < target && target <= nums[right]){
        left = mid + 1;
      }
      // left half
      else{
        right = mid - 1;
      }
    }
    
  }
  
  return -1;  
};

// Time: O(log(n))
// Space: O(1)