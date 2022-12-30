// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
 const largestRectangleArea = (heights) => {
  
  // check if the rectangle can be extended further if yes then push onto stack 
  // if no then pop out of stack and compute the area
  
  const stack = []; // index, height // n
  let maxArea = -Infinity;
  
  for(let i = 0; i < heights.length; i++){ // n
    
    const currentHeight = heights[i];
    let currentIdx = i;
    
    while(stack.length && currentHeight < stack[stack.length - 1][1]){ // k
      const [popIdx, popHeight] = stack.pop();
      const area = (i - popIdx) * popHeight;
      maxArea = Math.max(area, maxArea);
      currentIdx = popIdx;
    }
 
    stack.push([currentIdx, currentHeight]);
  }
  
  // for remaining elements i.e the reached the end
  for(const ele of stack){ // k
    const [idx, height] = ele;
    
    const area = (heights.length - idx) * height;
    maxArea = Math.max(area, maxArea);
  }
  
  return maxArea;
};

// Time: O(n*k)
// Space: O(n)