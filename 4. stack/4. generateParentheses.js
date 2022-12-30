// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = (n) => {
  
  const result = []; // n
  
  const generateParams = (open, close, partial) => {

    if(open > close) return;
    
    if(!open && !close) result.push(partial);
    
    // can add open
    if(open > 0) generateParams(open - 1, close, partial + '(');
    
    // can add close
    if(close > 0) generateParams(open, close - 1, partial + ')');
  }
  
  generateParams(n, n, '');
  
  return result;
};

// Time: ?
// Space: O(n * 2) = O(n)