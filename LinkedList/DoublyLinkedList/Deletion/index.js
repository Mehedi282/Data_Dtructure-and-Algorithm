class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkdedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next =newNode;
            this.tail = newNode;
        }
    }

    removeFisrtNode(){
        if(!this.head){
            console.log("The list is empty");
        }else{
            this.head=this.head.next;
            this.head.prev = null;
        }
    }

    removeLastNode(){
        if(!this.head){
            console.log("The list is empty");
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

    }

    removeNodeFromAspecicPosition(position){
        let current = this.head;
        let index=1;

        while(current.next !== null && index<position){
            index++;
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

    }

    displayList(){
        let current = this.head;
        while(current !==null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const dLinkedlist = new DoublyLinkdedList();

dLinkedlist.addNode(4);
dLinkedlist.addNode(5);
dLinkedlist.addNode(6);

dLinkedlist.removeFisrtNode();
dLinkedlist.removeLastNode();
dLinkedlist.removeNodeFromAspecicPosition(2);
dLinkedlist.displayList();
