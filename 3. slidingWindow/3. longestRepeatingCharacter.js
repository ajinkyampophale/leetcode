// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 const characterReplacement = function(str, k) {
  
  let p1 = 0, p2 = 0, max = 0, visited = {}, frequentCharCount = 0; // n

  while(p2 < str.length){ // n
    
    const current = str[p2];
    
    visited[current] = visited[current] ? ++visited[current] : 1;
    
    const currentCharCount = visited[current];
    
    frequentCharCount = Math.max(frequentCharCount, currentCharCount);
    
    let windowLength = p2 - p1 + 1;
    
    // shift left and decrease count from visited
    if((windowLength - frequentCharCount) > k){
      const prevP1 = str[p1];
      visited[prevP1]--;
      p1++;
    }
    
    const newWindowLength = p2 - p1 + 1;
    
    max = Math.max(max, newWindowLength);

    p2++;
  }
  
  return max;
};

// Time: O(n)
// Space: O(n)