// https://leetcode.com/problems/design-twitter/

class MaxHeap {
  
  constructor(){
    this.heap = [];
    this.length = 0;
  }
  
  swap(idx1, idx2){
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
  
  bubbleUp(){
    let currentIdx = this.heap.length - 1;
    
    while(currentIdx > 0){
     
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      
      if(this.heap[parentIdx]?.[0] < this.heap[currentIdx]?.[0]){
        this.swap(parentIdx, currentIdx);
        currentIdx = parentIdx;
      }
      else{
        break;
      }
    }
    
    return;
  }
  
  insert(val){
    this.heap.push(val);
    
    if(this.heap.length > 0){
      this.bubbleUp(); 
    }
    
    this.length++;
  }
  
  sinkDown(){
    
    let currentIdx = 0;
    
    while(currentIdx < this.heap.length){
     
      const leftIdx = (2 * currentIdx) + 1;
      const rightIdx = (2 * currentIdx) + 2;
      
      if(this.heap[leftIdx]?.[0] > this.heap[currentIdx]?.[0]){
        
        if(this.heap[leftIdx]?.[0] < this.heap[rightIdx]?.[0]){
          this.swap(rightIdx, currentIdx);
          currentIdx = rightIdx;
        }
        else{
          this.swap(leftIdx, currentIdx);
          currentIdx = leftIdx;
        }
      }
      else if(this.heap[rightIdx]?.[0] > this.heap[currentIdx]?.[0]){
        this.swap(rightIdx, currentIdx); 
        currentIdx = rightIdx;
      }
      else{
        break;
      }
    }
    
    return;
  }
  
  remove(){
    
    this.swap(0, this.heap.length - 1);
    
    const ele = this.heap.pop();
    
    this.sinkDown();
    
    this.length--;
    
    return ele;
  }
  
}

class Twitter {
 
  constructor(){
    this.count = 0;
    this.tweetMap = {};
    this.followMap = {};
  }
  
  /** 
   * @param {number} userId 
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if(!this.tweetMap[userId]) this.tweetMap[userId] = new Array();
    this.tweetMap[userId].push([this.count, tweetId]);
    this.count++;
  }

  /** 
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    
    const result = []; // 10
    const heap = new MaxHeap(); // n
    
    // add to his own follower
    this.follow(userId, userId);
    
    const followers = this.followMap[userId];
    
    for(const followerId of followers){ // n
      
      if(this.tweetMap[followerId]){
        let tweetsIdx = this.tweetMap[followerId].length - 1;
        const [tweetCount, tweetId] = this.tweetMap[followerId][tweetsIdx];
        heap.insert([tweetCount, tweetId, followerId, tweetsIdx - 1]);  // logn
      }
    }
      
    while(heap.length > 0 && result.length < 10){ // 10
      
      let [tweetCount, tweetId, followerId, tweetsIdx] = heap.remove(); // logn
      result.push(tweetId);
      
      if(tweetsIdx >= 0){
        ([tweetCount, tweetId] = this.tweetMap[followerId][tweetsIdx]);
        heap.insert([tweetCount, tweetId, followerId, tweetsIdx - 1]);  // logn
      }
    }
    
    return result;
  }

  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if(!this.followMap[followerId]) this.followMap[followerId] = new Set();
    this.followMap[followerId].add(followeeId);
  }

  /** 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if(!this.followMap[followerId]) return;
    this.followMap[followerId].delete(followeeId);
  }

}


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// Time: postTweet, follow, unfollow => O(1), getNewsFeed => O(nlogn + 10(logn + logn)) = O(nlog(n))
// Space: postTweet, follow, unfollow, getNewsFeed => O(n)