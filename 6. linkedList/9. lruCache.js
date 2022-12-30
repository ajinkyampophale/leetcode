// https://leetcode.com/problems/lru-cache/

class Node {
  constructor(key, val){
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  push(key, val){
    
    const newNode = new Node(key, val);
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    
    return newNode;
  }

  remove(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
  
  // insert before dummy node
  insert(key, val){
    const newNode = new Node(key, val);
    
    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
    return newNode;
  }
}

class LRUCache {
  
  /**
   * @param {number} capacity
   */
  constructor(capacity){
    this.capacity = capacity;
    this.cache = new Map();
    this.dll = new DoublyLinkedList();
    
    this.dll.push(0, 0);
    this.dll.push(0, 0);
  }

  _removeNode(node){
    const key = node.key;
    this.dll.remove(node);
    this.cache.delete(key);
  }
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {

    // remove => 1. when capacity is full and it is the key is least recently used
    // lru => 1. has not been fetched frequently, 2. is oldest in the cache
    
    // hashmap with pointer to original doubly linked list node
    // hashmap => to fetch key in O(1) time
    // doubly linked list => to store the data in relevant order / swap data

    if(this.cache.get(key)){
      this._removeNode(this.cache.get(key));
    }
    
    if(this.cache.size === this.capacity){ 
      // remove from start
      this._removeNode(this.dll.head.next);
    }
    
    const node = this.dll.insert(key, value);
    
    this.cache.set(key, node);
    return;
  }
  
  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.cache.get(key);

    if(!node) return -1;
    
    // swap the lru in dll
    // left => least recently used
    // right => most recently used
    this._removeNode(node);
    this.put(node.key, node.val);
    return node.val;
  }
  
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Time: O(1)
// Space: O(n)