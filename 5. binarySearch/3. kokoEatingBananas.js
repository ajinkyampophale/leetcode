// https://leetcode.com/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 const minEatingSpeed = (piles, h) => {
  
  let left = 1, right = Math.max(...piles) // n;
  
  while(left < right){ // logn
   
    const mid = Math.floor((left + right) / 2);
    
    let hours = 0;
    
    for(let i = 0; i < piles.length; i++){ // n
      const current = piles[i];
      
      hours += Math.ceil(current / mid);
    }

    if(hours <= h) right = mid;
    else left = mid + 1;
  }
  
  return right;
};

// Time: O(n + nlog(max(n))) = O(nlog(max(n)))
// Space: O(1)