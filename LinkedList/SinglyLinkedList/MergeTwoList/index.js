class Node{
    constructor(data, next = null){
        this.data = data;
        this.next= next;
    }
}

class LinkedList{
    constructor(){
        this.head= null;
    }

    appendNode(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        return
        }

        let currrentNode = this.head;
        while(currrentNode.next !== null){
            currrentNode = currrentNode.next;
        }

        currrentNode.next = newNode;
    }

    printData(){
        let currrnt = this.head;
        while(currrnt!== null){
            console.log(currrnt.data)
            currrnt = currrnt.next
        }
    }

}

const mergeList = (List1, List2)=>{
    if(!List1.head){
        return List2;
    }

    if(!List2.head){
        return List1;
    }

    let currnt = List1.head;
    while(currnt.next !== null){
        currnt=currnt.next;
    }

    currnt.next = List2.head;

    return List1;
}

const List1 = new LinkedList();
const List2 = new LinkedList();


List1.appendNode(1);
List1.appendNode(1);
List1.appendNode(1);

List2.appendNode(2);
List2.appendNode(2);
List2.appendNode(2);



const mergedList = mergeList(List1, List2);
console.log(mergedList.printData());
