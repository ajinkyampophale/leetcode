// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const findDuplicate = (nums) => {
  
  let fast = 0, slow = 0;
  
  while(true){ // n
    slow = nums[slow];
    fast = nums[nums[fast]];
    
    if(slow === fast) break;
  }
  
  let slow2 = 0;
  
  while(true){ // n
    slow = nums[slow];
    slow2 = nums[slow2];
    
    if(slow === slow2) return slow;
  }
};

// Time: O(n)
// Space: O(1)

