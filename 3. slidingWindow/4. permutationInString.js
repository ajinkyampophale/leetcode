// https://leetcode.com/problems/permutation-in-string/

const checkInclusion = function(s1, s2) {
  
  if(s1.length > s2.length) return false;
  
  // similar to anagram
  let p1 = 0, p2 = s1.length - 1, visiteds1 = {}, visiteds2 = {}; // n, m
  
  for(let i = 0; i < s1.length; i++){ // n
    visiteds1[s1[i]] = visiteds1[s1[i]] ? ++visiteds1[s1[i]] : 1;
    
    if(i < p2){
      visiteds2[s2[i]] = visiteds2[s2[i]] ? ++visiteds2[s2[i]] : 1;
    }
  }
  
  
  while(p2 < s2.length){ // m
    
    let flag = true;
    
    visiteds2[s2[p2]] = visiteds2[s2[p2]] ? ++visiteds2[s2[p2]] : 1;
    
    for(let key in visiteds1){ // 26
      if(visiteds1[key] !== visiteds2[key]){
        flag = false;
      }
    }
    
    if(flag){
      return true;
    }
    
    visiteds2[s2[p1]]--;
    p1++;
    p2++;
  }
    
  return false;  
};

// Time: O(n + (m * 26)) = O(n + m)
// Space: O(n + m)