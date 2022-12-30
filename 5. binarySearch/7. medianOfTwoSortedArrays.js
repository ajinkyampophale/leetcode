// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const isEven = (num) => num % 2 === 0;

const findMedianSortedArrays = (nums1, nums2) => {
  
  // smaller should be nums2
  if(nums1.length < nums2.length){
    [nums2, nums1] = [nums1, nums2];
  }

  const nums1Length = nums1.length, 
    nums2Length = nums2.length,
    half = Math.floor((nums1Length + nums2Length) / 2);

  let left = 0, right = nums2Length - 1;

  while(true){ // log(min(n, m))
    
    const num2Mid = Math.floor((left + right) / 2);
    const num1Mid = half - num2Mid - 2;

    const num1Value = (num1Mid >= 0) ? nums1[num1Mid] : -Infinity;
    const num1NextValue = (num1Mid + 1 < nums1Length) ? nums1[num1Mid + 1] : Infinity;
    const num2Value = (num2Mid >= 0) ? nums2[num2Mid] : -Infinity;
    const num2NextValue = (num2Mid + 1 < nums2Length) ? nums2[num2Mid + 1] : Infinity;
    
    // check if left half is valid or not
    if(num1Value <= num2NextValue && num2Value <= num1NextValue){
      
      const min = Math.min(num1NextValue, num2NextValue);
      
      if(isEven(nums1Length + nums2Length)){
        const max = Math.max(num1Value, num2Value);
        return (max + min) / 2;
      }
      else{
        return min;
      }

    }
    else if(num2Value > num1NextValue){
      right = num2Mid - 1;
    }
    else{
      left = num2Mid + 1;
    }
  }
  
};

// Time: O(log(min(n, m))) => n - nums1Length, m - nums2Length
// Space: O(1)