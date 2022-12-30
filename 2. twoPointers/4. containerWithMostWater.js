// https://leetcode.com/problems/container-with-most-water/

const maxArea = (verticalLines) => {
  
  let area = 0;
  let i = 0, j = verticalLines.length - 1;
  
  while(i < j){ // n
    
    const length = Math.min(verticalLines[i], verticalLines[j]);
    const currentArea = length * (j - i);
    
    area = Math.max(area, currentArea);
    
    if(verticalLines[i] <= verticalLines[j]){
      i++;
    }
    else{
      j--;
    }    
  }
 
  return area;
}

// Time: O(n)
// Space: O(1)