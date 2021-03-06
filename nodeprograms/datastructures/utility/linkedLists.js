class Node {
    // constructor
    constructor(element)
    {
        this.element = element;//holds the data of node
        this.next = null//holds pointer to next node intialized to null value
    }
}
// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;//stores first node of list
        this.size = 0;//indicates no.of nodes in list
    }
 
    // functions to be implemented
    // add(element)
    // adds an element at the end
// of list
add(element)
{
    // creates a new node
    var node = new Node(element);
 
    // to store current node
    var current;
 
    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
 
        // add node
        current.next = node;
    }
    this.size++;
}


// insert element at the position index
// of the list
insertAt(element, index)
{
    if (index > 0 && index > this.size)
        return false;
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) {
            node.next = head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
 
            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}
    // insertAt(element, location)
    // removeFrom(location)

    // removes an element from the
// specified location
removeFrom(index)
{
    if (index > 0 && index > this.size)
        return -1;
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // deleting first element
        if (index == 0) {
            this.head = curr.next;
        } 
        else {
            // iterate over the list to the
            // position to remove an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // remove the element
            prev.next = curr.next;
        }
        this.size--;
 
        // return the remove element
        return curr.element;
    }
}
// removes a given element from the
// list
removeElement(element)
{
    var current = this.head;
    var prev = null;
 
    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element ==element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

// finds the index of element
indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterae over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element ==element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}

isEmpty()
{
    return this.size == 0;
}

    // removeElement(element)

    size_of_list()//to find the size of list
{
    console.log(this.size);
}
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    //console.log(str);
    return str;
    
}
  GetElement(index) 
    { 
        var current =this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.element; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we  fail */
       
        return 0; 
    } 

    /* function to insert a element in a list. */
    insertSort(element) 
    { 
          
        var node = new Node(element);
    
        /* Special case for head node */
        if (this.head == null || this.head.element >= node.element) 
        { 
            node.next = this.head; 
           this.head = node; 
        } 
        else { 
    
           /* Locate the node before point of insertion. */
          var current = this.head; 
    
           while (current.next != null && 
                  current.next.element < node.element) 
                 current = current.next; 
    
               //  console.log(current.next.element);
                 
    
           node.next = current.next; 
           current.next = node; 
        } 
    
    }

}
module.exports=LinkedList;

