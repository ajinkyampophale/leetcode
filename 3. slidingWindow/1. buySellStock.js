// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  
  // [7, 8, 3, 10, 1, 2] => 10 - 3 = 7
  // [7, 8, 3, 1, 2, 10] => 10 - 1 = 9
  
  // if left is greater than right shift left
  // else calculate max right - left 
  
  let left = 0, right = 1, max = 0;
  
  while(right < prices.length){ // n
    
    if(prices[right] < prices[left]){
      left = right;
    }
    else{
      max = Math.max(max, prices[right] - prices[left]);
    }
    
    right++;
  }
  
  return max; 
};

// Time: O(n)
// Space: O(1)