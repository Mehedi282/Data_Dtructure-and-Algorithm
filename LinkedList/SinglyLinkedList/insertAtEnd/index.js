class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode
            return
        }

        let current = this.head;
        while(current.next !== null){
            current=current.next;
        }
        current.next = newNode;

    }

    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current=current.next;
        }
    }
}

const List = new LinkedList();

List.insertAtEnd(1);  
List.insertAtEnd(2);  
List.insertAtEnd(3);  
List.printList()

