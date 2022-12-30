//  https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isAnagram = function(s, t) {
    
  if(s.length !== t.length) return false;

  // loop over string one and store the letters present
  // loop over second and check if all the letters are present
  
  const svisited = {}, tvisited = {};
  
  for(let i = 0; i < s.length; i++){
      const sele = s[i];
      svisited[sele] = svisited[sele] ? ++svisited[sele] : 1;
      
      const tele = t[i];
      tvisited[tele] = tvisited[tele] ? ++tvisited[tele] : 1;
  }
  
  for(let key in svisited){
      if(svisited[key] !== tvisited[key]) return false;
  }
  
  return true;
};

// Time: O(n)
// Space: O(n + m)