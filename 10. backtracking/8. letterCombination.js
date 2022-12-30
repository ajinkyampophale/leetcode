// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
 const letterCombinations = (digits) => {
  
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  
  const result = [];
  
  const dfs = (idx, str) => {
    
    if(str.length === digits.length){
      result.push(str);
      return;
    }
    
    for(const digit of map[digits[idx]]){
      dfs(idx + 1, str + digit);
    }
  }
  
  if(digits.length > 0)
    dfs(0, "");
 
  return result;
}

// Time: O(n * 4^n) => 4 - max characters, n - no of output
// Space: O(n)