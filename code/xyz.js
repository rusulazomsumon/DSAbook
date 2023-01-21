// linked list source: https://www.youtube.com/watch?v=ZBdE8DElQQU

// single node
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }    
}
// linkde list 
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // ###############Operations############## 

    // #Incert at first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++;
    }

    // #Incert at Lat Node
    insertLast(data){
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size++;

    }

    // #Incert at any where
    insertAt(data, index){
        // if index out of range
        if(index > 0 && index > this.size){
            return;
        }

        // if want to put on first index
        if(index === 0){
            this.head = new Node(data, this.head);
            // this.head.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // set current to first 
        current = this.head;
        let count = 0;

        while(count < index){
            // node before index
            previous = current; 
            count++;
            // node after index
            current = current.next; 
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    // #Get At Index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        // if empty
        return null;
    }

    // #Remove At Index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // remove first 
        if(index === 0){
            this.head = current.next;
        }else{
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

     // #clear List
     clearList() {
        this.head = null;
        this.size = 0;
     }

    // #print List
    printListData(){
        // assinging linkded list to current
        let current = this.head;

        // now printing the current(hed) linked list
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// inseting at the last node 
ll.insertLast(400);
ll.insertLast(500);
ll.insertLast(600);
// Inserting at random index 
ll.insertAt(350,3);

// printing the entire list
// ll.printListData(); 

// printing at specifit index data
// ll.getAt(2);

// remove node at  index 
// ll.removeAt(3);
// ll.printListData();

// clear List 
// ll.clearList();
// ll.printListData();