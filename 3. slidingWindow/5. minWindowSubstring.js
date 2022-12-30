// https://leetcode.com/problems/minimum-window-substring/

const minWindow = function(str, target) {
    
  if(target.length <= 0 || target.length > str.length) return "";

  const targetMap = {}, strMap = {}; // n, m
  let minValue = Infinity, targetLength = target.length, matchCount = 0, p1 = 0, p2 = 0, result = [];
  
  for(const ele of target){ // n
    targetMap[ele] = targetMap[ele] ? ++targetMap[ele] : 1;
  }

  // increase matchCount when 
  //  1. the current element is present in targetMap and 
  //  2. Its strMap value is equal to its value in targetMap
  // decrease matchCount when
  //  1.It is moved / released from the window
  //  2. Check if matchCount is valid i.e. strMap value is equal to its value in targetMap

  while(p2 < str.length){ // m

    const currentElement = str[p2];

    // 1. acquire
    if(targetMap[currentElement]){
      strMap[currentElement] = strMap[currentElement] ? ++strMap[currentElement] : 1;

      if(strMap[currentElement] <= targetMap[currentElement]){
        matchCount++;
      }
    }
    
    // check if target and matchcount match
    //  1. adjust min value and result array
    //  2. release
    if(matchCount === targetLength){
      
      // release until valid
      while(matchCount === targetLength){ // m

        const elementAtP1 = str[p1];

        if(targetMap[elementAtP1]){
          strMap[elementAtP1]--;

          if(strMap[elementAtP1] < targetMap[elementAtP1]){
            matchCount--;
          }
        }
        
        const windowLength = p2 - p1 + 1;

        if(windowLength < minValue){
          minValue = windowLength;
          result = [p1, p2];
        }

        p1++;
      } 
    }
    
    p2++;
  }
  
  return str.substring(result[0], result[1] + 1);
};

// Time: O(n + (m * m)) = O(n + m^2)
// Space: O(n + m)