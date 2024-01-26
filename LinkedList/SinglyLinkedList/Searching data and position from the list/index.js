class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    appendNode(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return
        }else{

            let cur = this.head;
            while(cur.next!== null){
                cur = cur.next;
            }

            cur.next = newNode;
        }
    }

    searchValue(data){
        let cur = this.head;

        while(cur!== null){
            if(cur.data ==data){
                return 1
            }
            cur = cur.next;
        }

        return 0;
    }

    searchValuePosition(data){
        let cur = this.head;
        let position = 1;

        while(cur != null){
            if(cur.data == data){
                return position
            }
            cur = cur.next;
            position++;
        }

        return 0
    }

    printNode(){
        let cur = this.head;
        while(cur !== null){
            console.log(cur.data);
            cur = cur.next;
        }
    }
}

const List = new LinkedList();

List.appendNode(1);
List.appendNode(5);
List.appendNode(8);
List.appendNode(3);
List.appendNode(2);
List.printNode();


const searchResult= List.searchValue(2);
if(searchResult == 1){
    console.log("This exist's in the list")
}else{
    console.log('Does not exist')
}

const searchPositionResult= List.searchValuePosition(2);
if(searchPositionResult !== 0){
    console.log("The position of the Value is " + searchPositionResult)
}else{
    console.log('Does not exist')
}
