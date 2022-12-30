// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
 const partition = (s) => {
  
  const isPanlindrome = (left, right) => {
    
    while(left < right){
      if(s[left] !== s[right]) return false;
      
      left++;
      right--;
    }
    
    return true;
  }
  
  const result = [];
  
  const dfs = (idx, arr) => {
    
    if(idx >= s.length){
      result.push([...arr]); // n
    }
    
    for(let i = idx; i < s.length; i++){
      
      if(isPanlindrome(idx, i)){
        arr.push(s.substring(idx, i + 1));
        dfs(i + 1, arr);
        arr.pop();
      }
    }
  }
  
  dfs(0, []);
  
  return result;
}

// Time: O(n * 2^n)
// Space: O(n)