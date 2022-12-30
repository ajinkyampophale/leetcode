// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(numbers, target) {
  
  if(numbers.length <= 1) return [];
    
  let p1 = 0,
      p2 = numbers.length - 1;
  
  while(p1 < p2){ // n
    
    const sum = numbers[p1] + numbers[p2];
    
    if(sum === target){
      return [p1 + 1, p2 + 1];
    }
    else if(sum <= target){
      p1++;
    }
    else{
      p2--;
    }
  }
  
  return [];
};

// Time: O(n)
// Space: O(1)