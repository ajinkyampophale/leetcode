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

  insert(word, node = this.root){

    if(word.length === 0){
      node.isEnd = true;
      return;
    }
    else if(!node.keys[word[0]]){
      node.keys[word[0]] = new Node();
      this.insert(word.substring(1), node.keys[word[0]]);
    }
    else{
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  getRoot(){
    return this.root;
  }

  search(word, node = this.root){

    if(word.length === 0 && node.isEnd){
      return true; 
    }
    else if(word.length === 0){
        return false;
    }
    else if(!node.keys[word[0]]){
      return false;
    }
    else{
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root){

    if(prefix.length === 0){
      return true;
    }
    else if(!node.keys[prefix[0]]){
      return false;
    }
    else{
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
    }
  }

}

console.clear();
const tries = new Tries();
tries.insert("apple");
tries.insert("dog");
tries.insert("app");

console.log("Search: ", tries.search("apple"));

console.log(tries.startsWith("appl"));

console.log(tries.getRoot());