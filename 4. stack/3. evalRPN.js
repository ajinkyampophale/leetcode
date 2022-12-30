// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
 const evalRPN = (tokens) => {
  
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => Math.trunc(a / b),
    '*': (a, b) => a * b
  };
  
  const stack = []; // n
  
  for(const token of tokens){ // n
    
    if(!operations[token]){
      stack.push(Number(token)); 
    }
    else{
      
      const ele1 = stack.pop();
      const ele2 = stack.pop();
      
      const result = operations[token](ele2, ele1);
      
      stack.push(result);
    }
  }
  
  return stack.pop();
};

// Time: O(n)
// Space: O(n)