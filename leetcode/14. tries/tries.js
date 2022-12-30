class Node {
  constructor(){
    this.isEnd = false;
    this.keys = {};
  }
}

class Tries {

  constructor(){
    this.root = new Node();
  }

  insert(word){

    let node = this.root;
    let wordLength = word.length;

    for(let i = 0; i < wordLength; i++){
      const letter = word[i];
      const current = node.keys[letter];

      if(current){
        node = current;
        if(i === wordLength - 1) node.isEnd = true;
      }
      else{
        let newNode = new Node(letter); 
        if(i === wordLength - 1) newNode.isEnd = true;
        node.keys[letter] = newNode;
        node = newNode;
      }
    }
    
    return null;
  }

  getRoot(){
    return this.root;
  }

  search(word){

    let node = this.root;
    let wordLength = word.length;

    for(let i = 0; i < wordLength; i++){
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

    for(let i = 0; i < prefixLength; i++){
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

console.clear();
const tries = new Tries();
tries.insert("apple");
tries.insert("dog");
tries.insert("app");

console.log(tries.search("app"));

console.log(tries.startsWith("app"));

console.log(tries.getRoot());