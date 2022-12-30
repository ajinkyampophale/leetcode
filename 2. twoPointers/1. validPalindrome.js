// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
const convertStr = (str) => {
  return str.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase();
}

const isPalindrome = (str) => {

  // using 2 pointers
  
  if(str === "") return true;
  
  str = convertStr(str);
  let i = 0, j = str.length - 1;
  
  while(i < j){
      
    if(str[i] !== str[j]) return false;
    
    i++;
    j--;
  }
  
  return true;
}

// Time: O(n)
// Space: O(1)