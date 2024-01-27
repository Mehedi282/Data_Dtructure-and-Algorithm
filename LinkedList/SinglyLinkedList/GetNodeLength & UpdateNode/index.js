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


    appendNode (data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    getLenght(){

        if(!this.head){
            console.log("The Linked is Empty");
            return
        }

        let current = this.head;
        let lenght = 0;
        while(current !== null){
            lenght++;
            current = current.next;
        }
        return lenght;
    }

    updateValue(value, putThis){
        let current = this.head;
        while(current !== null){
            if(current.data === value){
                current.data = putThis;
            }
            current = current.next;
        }

        if(current == null){
            console.log("The value doesn't exist to update");
        }
    }

    updateValueOfPostionX(position, value){
        if(position<1){
            console.log("Invalid position");
            return
        }
        let count = 1;
        let current = this.head;

        while( current !==null){
            if(count === position){
                current.data = value;
            }
            count++;
            current = current.next;
        }

        if(current == null){
            console.log("Position out of bounds");
        }
    }

    printList(){
        let current = this.head;
        while(current!== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const TheList = new LinkedList();


TheList.appendNode(3);
TheList.appendNode(60);
TheList.appendNode(0);
TheList.appendNode(2);
TheList.updateValue(0, 50);
TheList.updateValueOfPostionX(4, 7);
TheList.printList();
const ListLength = TheList.getLenght();
console.log("The list length is " + ListLength);

