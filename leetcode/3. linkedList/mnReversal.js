const reverseLinkedList = (head, m, n) => {

  let current = head, start = head, position = 1;

  while(position < m){
    start = current;
    current = current.next;
    position++;
  }

  let tail = current, newList = null;

  // reverse linked list
  while(m <= position && position <= n){
    let temp = current.next;
    current.next = newList;
    newList = current;
    current = temp;
    position++;
  }

  start.next = newList;
  tail.next = current;

  return (m > 1) ? head : newList;
}

// Time: O(n)
// Space: O(1)

class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class LinkedList {

	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	shift(val){

		const newNode = new Node(val);

		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}

		newNode.next = this.head;
		this.head = newNode; 
		this.length++;
		return this;
	}

	getHead(){
		return this.head;
	}
}

// const ll = new LinkedList();
// ll.shift(70);
// ll.shift(60);
// ll.shift(50);
// ll.shift(40);
// ll.shift(30);
// ll.shift(20);
// ll.shift(10);
// const head = ll.getHead();
// console.log(JSON.stringify(head));

// const reversell = reverseLinkedList(head, 3, 5);
// console.log(JSON.stringify(reversell));

const ll = new LinkedList();
ll.shift(5);
ll.shift(3);
const head = ll.getHead();
console.log(JSON.stringify(head));

const reversell = reverseLinkedList(head, 1, 1);
console.log(JSON.stringify(reversell));