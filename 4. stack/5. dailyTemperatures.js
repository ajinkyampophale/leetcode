// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 const dailyTemperatures = (temperatures) => {
  
  const result = new Array(temperatures.length).fill(0); // n
  const stack = []; // n
  
  for(let i = 0; i < temperatures.length; i++){
    
    const current = temperatures[i];
    
    while(stack.length && stack[stack.length - 1][0] < current){
      const [, lastIndex] = stack.pop();
      result[lastIndex] = i - lastIndex;
    }
    
    stack.push([current, i]);
  }
  
  return result;
};

// Time: O(n) ? 
// Space: O(n)