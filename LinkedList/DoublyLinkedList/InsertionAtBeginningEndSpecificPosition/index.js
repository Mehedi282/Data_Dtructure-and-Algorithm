class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    appendAtBegining(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    appendATend(data){
        const newNode = new Node(data);

        if(!this.head){
            this.appendAtBegining(data);
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

    }

    insertAtPosition(data, position){
        const newNode = new Node(data);

        if(!this.head){
            this.appendAtBegining(data);
        }else{
            let index =1
            let current = this.head;
            while(index<position-1 && current !==null){
                index++;
                current = current.next;
            }

         newNode.prev = current;
         newNode.next = current.next;
         current.next = newNode
         newNode.next.prev = newNode

        }
    }

    displayListHeadTOTail(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }

    }
    displayListTailTOHead(){
        let current = this.tail;
        while(current !== null){
            console.log(current.data);
            current = current.prev;
        }

    }
}

const DLL = new DoublyLinkedList();
DLL.appendAtBegining(4);
DLL.appendAtBegining(4);
DLL.appendAtBegining(4);
DLL.appendAtBegining(4);
DLL.appendAtBegining(5);
DLL.appendATend(6);
DLL.appendATend(7);
DLL.insertAtPosition(10,2);

console.log("List from left to right")
DLL.displayListHeadTOTail();

DLL.insertAtPosition
DLL.displayListTailTOHead();
