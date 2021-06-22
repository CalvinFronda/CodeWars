/**
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implementation the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language. 

 

Example 1:

Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
 */

class MyCircularQueue {
    constructor(k) {
        // data is a set array size with K
        this.data = new Array(k);
        // pointer at the head of array
        this.head = 0;
        // pointer at tail of array
        this.tail = -1;
        // current size of array
        this.size = 0;
    }

    enQueue(value) {
        // first we check if array is full
        if (this.isFull()) return false;
        // setting the tail to head index if reached max size
        this.tail = (this.tail + 1) % this.data.length;
        // inserts element into the circular queue
        this.data[this.tail] = value;
        // increment size
        this.size++;
        return true;
    }

    deQueue() {
        // check if possible to deQueue
        if (this.isEmpty()) return false;
        // setting the head to the next value by the remainder of the length
        this.head = (this.head + 1) % this.data.length;
        // decrement the size
        this.size--;
        return true;
    }

    // checks the front of array
    Front() {
        return this.isEmpty() ? -1 : this.data[this.head];
    }
    // checks the rear/ tail of array
    Rear() {
        return this.isEmpty() ? -1 : this.data[this.tail];
    }
    // if the array is empty return true|false
    isEmpty() {
        return this.size === 0;
    }
    // if the length of the array is equal to the size counter
    isFull() {
        return this.size === this.data.length;
    }
}
