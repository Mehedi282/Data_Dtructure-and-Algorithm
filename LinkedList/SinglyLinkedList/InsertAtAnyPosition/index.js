class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LindedList{
    constructor(){
        this.head = null;
    }

    insertAtPosition(data, position){
        const newNode = new Node(data);

        if(position == 0){
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head;
        let count = 0;

        while(current.next !== null && count<position-1){
            current = current.next;
            count++;
        }

        if(current.next == null){
            console.log("Position out of bound");
            return
        }

        newNode.next = current.next
        current.next=newNode;
        
    }

    insertAtEnd(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next
        }

        current.next = newNode;
    }

    displayList(){
        let current = this.head;
        while(current.next !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const List = new LindedList();

List.insertAtEnd(1);
List.insertAtEnd(2);
List.insertAtEnd(3);
List.insertAtEnd(4);
List.insertAtEnd(5);
List.insertAtEnd(6);
List.insertAtEnd(7);
List.insertAtPosition(9, 4);
List.displayList();

