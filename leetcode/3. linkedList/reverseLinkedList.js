const reverseLinkedList = (head) => {

	let currentNode = head;
	let previousNode = null;

	while(currentNode){
		let tempNode = currentNode.next;
		currentNode.next = previousNode;
		previousNode = currentNode;
		currentNode = tempNode;
	}
	
	return previousNode;
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

const ll = new LinkedList();
ll.shift(10);
ll.shift(20);
ll.shift(30);
ll.shift(40);
const head = ll.getHead();
console.log(JSON.stringify(head));

const reversell = reverseLinkedList(head);
console.log(JSON.stringify(reversell));
