// https://leetcode.com/problems/time-based-key-value-store/

class TimeMap {
  
  constructor(){
    this.store = {};
  }
  
  /** 
   * @param {string} key 
   * @param {string} value 
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    
    if(!this.store[key]){
      this.store[key] = [];  
    }
    
    this.store[key].push([value, timestamp]);
  }
  
  /** 
   * @param {string} key 
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    
    if(!this.store[key]) return "";
    
    const storeArr = this.store[key];
    let left = 0, right = storeArr.length - 1;
    let result = "";
    
    while(left <= right){ // logn
     
      const mid = Math.floor((left + right) / 2);
      const midTimestamp = storeArr[mid][1];
      
      if(timestamp === midTimestamp){
        return storeArr[mid][0];
      }
      else if(midTimestamp < timestamp){    
        result = storeArr[mid][0];
        left = mid + 1;
      }
      else{
        right = mid - 1;
      }
    }
    
    return result;
  }
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Time: set: O(1), get: O(log(n))
// Space: O(n)