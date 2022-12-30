// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
 const longestConsecutive = function(nums) {
    
  // get the starting node -> by checking if previous element exists or not -> 
  // if previous element exists then its not start else its a start
  // eg: 1, 2, 3, 4 => 1 is start as previous of one does not exists. Similarly 3 is not start as 3's previous 2 exists.
  // eg: 100 => 100 => 100 is start as previous of one does not exists
  
  // we can use set to find start as set has O(1) to fetch data and only has unique values
  
  const set = new Set(nums); // n
  let max = 0;
  
  for(let i = 0; i < nums.length; i++){ // n
      
      let sequenceCount = 1;
      const current = nums[i];
      const prev = current - 1;
      
      // check if previous exists if yes then continue as it is not a start of a sequence
      if(set.has(prev)){
          continue;
      }
      
      let next = current + 1;
      
      // loop till it has next value
      while(set.has(next)){ // no of sequences => k
          sequenceCount++;   
          next++;
      }
      
      max = Math.max(max, sequenceCount);
  }
  
  return max;
};

// Time: O(n * k)
// Space: O(n)