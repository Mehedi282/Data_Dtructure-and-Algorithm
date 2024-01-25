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

  addNode(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteHead() {
    if (!this.head) {
      console.log("List is already empty");
      return;
    } else {
      this.head = this.head.next;
    }
  }

  deleteTail() {
    if (!this.head || this.head.next == null) {
      console.log("List is empty or list has only one element");
      return;
    } else {
      let current = this.head;
      let prev = null;

      while (current.next !== null) {
        prev = current;
        current = current.next;
      }

      prev.next = null;
    }
  }

  deleteNodeAtPosition(position){
    if (position ==1){
        this.head = this.head.next;
        return
    }else{
        if(position<1){
            console.log("invalid position");
            return
        }
    }

    let current = this.head;
    let prev = null;
    let count = 1

    while(count<position && current.next !==null){
        prev = current;
        current = current.next;
        count++;
    }

    if(current.next == null){
        console.log("Position is out of bounds");
        return
    }
    prev.next = current.next;
  }

  displayList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const List = new LinkedList();

// adding new node at the begining of the list
List.addNode(100);
List.addNode(10);
List.addNode(8);
List.addNode(60);
List.addNode(14);
List.addNode(1);

// deleting the head of the linked list
List.deleteHead();
List.deleteHead();

//delete the tail of the linked list
List.deleteTail();

// delete node specific position of the list
List.deleteNodeAtPosition(3);


//Prnting the list
List.displayList();
