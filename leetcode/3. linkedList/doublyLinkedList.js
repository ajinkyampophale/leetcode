const flattenDoublyLinkedList = (head) => {

  let parent = head;

  while(parent){

    if(parent.child){

      let childHead = parent.child;

      // traverse child
      let childTail = parent.child;
      while(childTail.next){
        childTail = childTail.next;
      }

      let tempNode = parent.next;
      childHead.prev = parent;
      parent.next = childHead;
      tempNode.prev = childTail;
      childTail.next = tempNode;
    }

    parent = parent.next;
  }

  return head;
}

// Time: O(n)
// Space: O(1)


const printFlattenDoublyLinkedList = (head) => {

  let current = head;
  let str = "";

  while(current){
    str += ` -> ${current.val}`;
    current = current.next;
  }

  return str;
}


class Node {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
    this.child = null;
  }
}

class DoublyLinkedList {

  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){

    const newNode = new Node(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  getHead(){
    return this.head;
  }

  getNode(val){
    let current = this.head;

    while(current){
    
      if(current.val === val){
        return current;
      }
      
      current = current.next;
    }

    return null;
  }

  addChild(parentNode, val){
    const newNode = new Node(val);
    parentNode.child = newNode;
    return newNode;
  }

	pushToChild(childNode, val){
    	    
    const newNode = new Node(val);
    let current = childNode;

    while(current.next){
      current = current.next;
    }

    newNode.prev = current;
    current.next = newNode;
    return newNode;
	}
}

const dd = new DoublyLinkedList();
dd.push(10);
dd.push(20);
dd.push(30);
dd.push(40);
dd.push(50);
dd.push(60);
const head = dd.getHead();
// console.log(dd.getHead());

const parentNode = dd.getNode(20);
const childNode = dd.addChild(parentNode, 70);

const node80 = dd.pushToChild(childNode, 80);
dd.pushToChild(childNode, 90);

const childNode100 = dd.addChild(node80, 100);
dd.pushToChild(childNode100, 110);

const parentNode50 = dd.getNode(50);
const childNode50 = dd.addChild(parentNode50, 120);
dd.pushToChild(childNode50, 130);

// console.log(dd.getNode(20));
// console.log(dd.getNode(50));

// console.log(head);

// const flattenddl = flattenDoublyLinkedList(head);

// console.log(flattenddl);
// console.log(printFlattenDoublyLinkedList(flattenddl));


const dd2 = new DoublyLinkedList();
dd2.push(10);
console.log(flattenDoublyLinkedList(dd2.getHead()));