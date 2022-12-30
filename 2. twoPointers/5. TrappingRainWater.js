// https://leetcode.com/problems/trapping-rain-water/

const trap = (edges) => {
  
  let totalArea = 0, 
      p1 = 0, 
      p2 = edges.length - 1,
      maxLeft = edges[p1],
      maxRight = edges[p2],
      current = edges[p1];
      
      
  while(p1 < p2){ // n
    
    // check if there is wall on left side
    if(maxLeft > current){
      totalArea += Math.min(maxLeft, maxRight) - current;
    }
   
    if(edges[p1] <= edges[p2]){
      p1++;
      maxLeft = Math.max(maxLeft, edges[p1]);
      current = edges[p1];
    }
    else{
      p2--;
      maxRight = Math.max(maxRight, edges[p2]);
      current = edges[p2];
    } 
  } 
  
  return totalArea;
}

// Time: O(n)
// Space: O(1)