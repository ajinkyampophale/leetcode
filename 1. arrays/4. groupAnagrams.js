// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 const CHARS = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25
};

const createHash = (str) => {
 
  const hash = new Array(26).fill(0);
  
  for(let char of str){
      ++hash[CHARS[char]];   
  }
  
  return hash.toString();
}

const groupAnagrams = function(strs) {
  
  // if empty return array of string return the same
  // create hash and check if hash is present in the hash map
  
  if(strs.length <= 0) return [];
  
  const visited = {};
  
  for(let i = 0; i < strs.length; i++){
      
      const current = strs[i];
      
      const hash = createHash(current);
      
      if(visited[hash]) visited[hash].push(current);
      else visited[hash] = [current];
  }
  
  const result = [];
  
  for(let key in visited){
      result.push(visited[key]);  
  }
  
  return result;
};

// Time: O(n*max(wordLength))
// Space: O(n*max(wordLength))