// https://leetcode.com/problems/implement-trie-prefix-tree/

class Node {
  constructor(){
    this.isEnd = false;
    this.keys = {};
  }
}

class Trie {

  constructor(){
    this.root = new Node();
  }

  insert(word){

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

  getRoot(){
    return this.root;
  }

  search(word){

    let node = this.root;
    let wordLength = word.length;

    for(let i = 0; i < wordLength; i++){ // w
      const letter = word[i];
      const current = node.keys[letter];

      if(current){
        if(i === wordLength - 1 && current.isEnd) return true;
        node = current;
      }
      else{
        return false;
      }
    }

    return false;
  }

  startsWith(prefix){

    let node = this.root;
    let prefixLength = prefix.length;

    for(let i = 0; i < prefixLength; i++){ // w
      const letter = prefix[i];
      const current = node.keys[letter];

      if(current){
        if(i === prefixLength - 1) return true;
        node = current;
      }
      else{
        return false;
      }
    }

    return false;
  }

}


// Time: O(w)
// Space: O(1)