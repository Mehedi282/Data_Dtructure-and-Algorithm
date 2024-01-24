class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // A method that inserts a node at the beginning of the list

  insAtBeg(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
     this.head = newNode;
  }
// A method that display the list
  printList() {
    let cur = this.head;
    while (cur !== null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

const List = new LinkedList();
List.insAtBeg(1); 
List.insAtBeg(2); 
List.insAtBeg(3); 
List.printList()
