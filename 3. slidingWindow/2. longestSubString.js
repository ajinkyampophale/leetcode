// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (str) => {
 
  let max = 0, p1 = 0, p2 = 0;
  const visited = {}; // n

  while(p2 < str.length){ // n
      
    const visitedEle = visited[str[p2]];
    
    if(visitedEle !== undefined && p1 <= visitedEle){ 
      p1 = visited[str[p2]] + 1;
    }
   
    max = Math.max(max, p2 - p1 + 1);
    visited[str[p2]] = p2; 
    p2++;
  }
  
  return max;
}

// Time: O(n)
// Space: O(n)