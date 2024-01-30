class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedLis {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.insertAtBeginning(data);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
  }

  insertAtPosition(data, position) {
    const newNode = new Node(data);

    let current = this.head;
    let index = 1;

    while (current !== this.head && index < position - 1) {
      index++;
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }


  displayList() {
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const THeList = new CircularLinkedLis();
THeList.insertAtBeginning(3);
THeList.insertAtBeginning(5);
THeList.insertAtBeginning(6);
THeList.insertAtBeginning(9);
THeList.insertAtPosition(0, 2);
THeList.displayList();
