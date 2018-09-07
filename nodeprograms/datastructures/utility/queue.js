// Queue class
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
                 
    // Functions to be implemented
    // enqueue(item)
    // enqueue function
enqueue(element)
{    
    // adding element to the queue
    this.items.push(element);
}
    // dequeue()
    // dequeue function
dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
    // front()
    // front function
front()
{
    // returns the Front element of 
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
    // isEmpty()
    

    // printQueue()
    // printQueue function
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}
module.exports = Queue;