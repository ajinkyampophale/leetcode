// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const isPrevDuplicate = (nums, index) => nums[index] === nums[index - 1];
 const isNextDuplicate = (nums, index) => nums[index] === nums[index + 1];
 
 const search = (nums, target, left, right, sums) => {
   
  while(left < right){
  
    const total = nums[left] + nums[right];
  
    if(total === target){
      sums.push([-target, nums[left], nums[right]]);
      left++;
      right--;
      
      // need to pass onto next unique element
      while(left < right && isPrevDuplicate(nums, left)) left++;
      while(left < right && isNextDuplicate(nums, right)) right--;
    }    
    else if(total <= target){
      left++;
    } 
    else{
      right--;
    }    
  }
}
 
 
 const threeSum = function(nums) {
   
  // sort the elements 
  // preform 2 sum on elements giving first as target
  // ignore the dublicate values
  
  nums = nums.sort((a, b) => a - b); // nlogn, n
  const sums = []; // n
  
  for(let i = 0; i < nums.length; i++){ // n
    
    if(isPrevDuplicate(nums, i)) continue;
    
    const current = nums[i];
    
    const target = -current,
          left = i + 1,
          right = nums.length - 1;
    
    search(nums, target, left, right, sums); // n
  }
  
  return sums;
};

// Time: O(nlog(n)) + O(n * n) = O(n^2)
// Space: O(n + n) = O(n)