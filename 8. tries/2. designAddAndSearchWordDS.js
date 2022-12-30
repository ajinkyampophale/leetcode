// https://leetcode.com/problems/design-add-and-search-words-data-structure/

class Node {
  constructor(){
    this.keys = [];
    this.isEnd = false;
  }
}

class WordDictionary {
 
  constructor(){
    this.root = new Node();
  }
  
  /** 
   * @param {string} word
   * @return {void}
   */
  addWord(word) {

    let node = this.root;
    let wordLength = word.length;

    for(let i = 0; i < wordLength; i++){ // w
      const letter = word[i];
      const current = node.keys[letter];

      if(current){
        node = current;
      }
      else{
        let newNode = new Node(letter);
        node.keys[letter] = newNode;
        node = newNode;
      }
      
      if(i === wordLength - 1) node.isEnd = true;
    }
    
    return null; 
  }
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    
    const dfs = (root, start) => {

      let current = root;

      for(let i = start; i < word.length; i++){ // w
        const letter = word[i];

        if(letter === '.'){
          
          for(const key in current.keys){ // 26
            let result = dfs(current.keys[key], i + 1);
            if(result){
              return true;
            }
          }
          
          return false;
        }
        else{
          if(current.keys[letter]){
            current = current.keys[letter];
          }
          else{
            return false;
          }            
        }
      }
      
      return current.isEnd;
    }
    
    return dfs(this.root, 0);
  }
}


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Time: O(w)
// Space: O(1)