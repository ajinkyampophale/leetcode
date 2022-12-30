const cycleDetection = (head) => {

  let current = head;
  let visited = new Set();

  while(current){

    const val = current.val;

    if(visited.has(val)){
      break;
    }
    else{
      visited.add(val);
    }

    current = current.next;
  }

  return current || false;
}

// Time: O(n)
// Space: O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const detectCycle = (head) => {
  
  if(!head) return null;

  let tortoise = head;
  let hare = head;

  while(hare?.next){
    tortoise = tortoise.next;
    hare = hare.next.next;
    
    if(tortoise === hare) break;
  }

  if(hare?.next){

    let meetingPoint = hare;

    while(head !== meetingPoint){
      head = head.next;
      meetingPoint = meetingPoint.next;
    }
    
    return head;
  }

  return null;
}

const cycleDetectionFloyd2 = (head) => {

  let tortoise = head;
  let hare = head;

  while(true){
    tortoise = tortoise.next;
    hare = hare.next;

    if(hare.next === null || head.next.next === null){
      return false;
    }
    else{
      hare = hare.next;
    }
    
    if(tortoise === hare) break;
  }

  let p1 = head, meetingPoint = tortoise;

  while(p1 !== meetingPoint){
    p1 = p1.next;
    meetingPoint = meetingPoint.next;
  }
  
  return p1;
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

  addCycle(node){
    this.tail.next = node;
    return; 
  }
}

const ll = new LinkedList();
ll.shift(80);
ll.shift(70);
ll.shift(60);
ll.shift(50);
ll.shift(40);
ll.shift(30);
ll.shift(20);
ll.shift(10);
const node = ll.getNode(30);
ll.addCycle(node);
const head = ll.getHead();
// console.log(head);

// console.log(cycleDetection(head));

console.log(cycleDetectionFloyd(head));