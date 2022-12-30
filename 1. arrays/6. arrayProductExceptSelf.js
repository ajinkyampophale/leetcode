// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = function(nums) {
    
  // loop from start and calculate product of previous elements
  // loop from end and calculate product of ending elements
  
  const res = []; // n
  let product = 1;
  
  for(let i = 0; i < nums.length; i++){ // n
      res[i] = product;
      product *= nums[i];
  }
  
  product = 1;
  
  for(let i = nums.length - 1; i >= 0; i--){ // n
      res[i] *= product;
      product *= nums[i];
  }
  
  return res;
};

// Time: O(n + n) = O(n)
// Space: O(n)