// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 const searchMatrix = (matrix, target) => {
  
  for(let i = 0; i < matrix.length; i++){ // n
    
    const current = matrix[i];
    const lastElement = current[current.length - 1];
    
    if(lastElement === target) return true;
    else if(target < lastElement){
      let left = 0, right = current.length - 1;
      
      while(left <= right){ // m
        
        const mid = Math.floor((left + right) / 2);
        
        if(target === current[mid]) return true;
        else if(target > current[mid]) left = mid + 1;
        else right = mid - 1;
      }
      
      return false;
    }  
  }
  
  return false;
};

// Time: O(n + m)
// Space: O(1)