// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const findMin = (nums) => {
  
  let left = 0, right = nums.length - 1;
  
  while(left <= right){ // logn
    
    const mid = Math.floor((left + right) / 2);
    const midValue = nums[mid];
    const leftValue = nums[left];
    const rightValue = nums[right];
    
    if(leftValue <= rightValue){
      return leftValue;
    }
    
    // in left sorted half
    if(leftValue <= midValue){
      
      if(midValue > nums[mid + 1]){
        return nums[mid + 1];
      }
      else{
        left = mid + 1;
      }
    }
    else{
      
      if(midValue < nums[mid - 1]){
        return nums[mid];
      }
      else{
        right = mid - 1;
      }
    }

  }
  
  return -1;
};

// Time: O(log(n))
// Space: O(1)