class Person {
  constructor(val){
    this.value = val;
    this.children = [];
    this.isAlive = true;
  }
}

class People {

  constructor(parent){
    const person = new Person(parent);
    this.root = person;
    this.nodeList = {};
    this.nodeList[parent] = person;
  }

  birth(child, parent){
    const person = new Person(child);

    const parentNode = this.nodeList[parent];

    this.nodeList[child] = person;
 
    if(parentNode) parentNode.children.push(person);
    
    return null;
  }

  death(name){
    const node = this.nodeList[name];
    
    if(node) node.isAlive = false;

    return null;
  }

  _dfs(node, list){

    if(node.isAlive) list.push(node.value);

    if(node.children.length > 0){
      for(const child of node.children){
        this._dfs(child, list);
      }
    }

    return list;
  }

  getOrderOfSuccession(){
    return this._dfs(this.root, []);
  }
  
  getRoot(){
    return this.root;
  }
}

console.clear();
const people = new People("Jack");
people.birth("John", "Jack");
people.birth("Marry", "John");
people.birth("Albert", "John");
people.birth("Newton", "Marry");
people.birth("Tesla", "Jack");
people.birth("Heisenberg", "Jack");
people.birth("Elon", "Tesla");
people.birth("Jeff", "Heisenberg");

// people.death("Jack");
// people.death("Marry");

console.log(people.nodeList);

console.log(people.getRoot());

console.log(people.getOrderOfSuccession());

// Time: Birth: O(1), Death: O(1), getOrderOfSuccession: O(n)
// Space: Birth: O(1), Death: O(1), getOrderOfSuccession: O(n)